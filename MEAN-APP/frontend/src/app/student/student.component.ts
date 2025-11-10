import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any[] = [];
  student = {
    name: '',
    age: '',
    course: '',
    marks: ''
  };

  isEditing = false;
  editId: string = '';

  // Backend API base URL
  private apiUrl = 'http://localhost:3000/api/students';

  constructor() {}

  ngOnInit(): void {
    this.getStudents(); // Fetch existing student data on component load
  }

  // Fetch all students (READ)
  async getStudents() {
    try {
      const res = await axios.get(this.apiUrl);
      this.students = res.data;
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  }

  // 🟦 Add a new student (CREATE)
  async addStudent() {
    try {
      if (this.isEditing) {
        await axios.put(`${this.apiUrl}/${this.editId}`, this.student);
        this.isEditing = false;
        this.editId = '';
      } else {
        await axios.post(this.apiUrl, this.student);
      }
      this.student = { name: '', age: '', course: '', marks: '' };
      this.getStudents(); // Refresh list
    } catch (err) {
      console.error('Error adding/updating student:', err);
    }
  }

  // 🟨 Edit existing student
  editStudent(s: any) {
    this.isEditing = true;
    this.editId = s._id;
    this.student = { ...s }; // pre-fill form fields
  }

  // 🟥 Delete student
  async deleteStudent(id: string) {
    try {
      await axios.delete(`${this.apiUrl}/${id}`);
      this.getStudents();
    } catch (err) {
      console.error('Error deleting student:', err);
    }
  }

}
