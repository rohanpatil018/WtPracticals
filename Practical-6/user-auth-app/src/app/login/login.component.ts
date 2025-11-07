import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  loginUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === this.email && user.password === this.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('✅ Login Successful!');
      } else {
        alert('❌ Invalid credentials.');
      }
    } else {
      alert('⚠️ No user found. Please register first.');
    }
  }
}
