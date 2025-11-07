import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = null;

  ngOnInit(): void {
    const data = localStorage.getItem('loggedInUser');
    if (data) {
      this.user = JSON.parse(data);
    }
  }
}
