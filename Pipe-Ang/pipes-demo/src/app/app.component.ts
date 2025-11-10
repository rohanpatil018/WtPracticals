import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentName: string = 'Rakesh Patil';
  course: string = 'Angular Framework';
  todayDate: Date = new Date();
  fees: number = 25000;
}
