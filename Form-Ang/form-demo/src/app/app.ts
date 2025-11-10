import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  student = {
    name: '',
    email: '',
    course: '',
    gender: ''
  };
  
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
