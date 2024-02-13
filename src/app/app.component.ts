import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PasswdCheckFormComponent } from './passwd-check-form/passwd-check-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswdCheckFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Password Strength Checker';
}
