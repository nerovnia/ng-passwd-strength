import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PasswdFieldComponent } from './shared/components/passwd-field/passwd-field.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswdFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Password Strength Checker';
}
