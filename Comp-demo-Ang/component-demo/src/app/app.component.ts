import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 important for Angular 17+
  imports: [StudentComponent], // 👈 tells Angular this component uses <app-student>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Hello from Parent Component!';
}
