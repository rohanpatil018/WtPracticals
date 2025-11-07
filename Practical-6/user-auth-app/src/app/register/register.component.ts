import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  registerUser() {
    if (this.user.name && this.user.email && this.user.password) {
      localStorage.setItem('user', JSON.stringify(this.user));
      alert('✅ Registration Successful!');
      this.user = { name: '', email: '', password: '' };
    } else {
      alert('⚠️ Please fill all fields.');
    }
  }
}
