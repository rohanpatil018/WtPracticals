import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  baseUrl = 'http://localhost:3000/api/students';

  async getStudents() {
    const res = await axios.get(this.baseUrl);
    return res.data;
  }

  async addStudent(student: any) {
    const res = await axios.post(this.baseUrl, student);
    return res.data;
  }

  async updateStudent(id: string, student: any) {
    const res = await axios.put(`${this.baseUrl}/${id}`, student);
    return res.data;
  }

  async deleteStudent(id: string) {
    const res = await axios.delete(`${this.baseUrl}/${id}`);
    return res.data;
  }
}
