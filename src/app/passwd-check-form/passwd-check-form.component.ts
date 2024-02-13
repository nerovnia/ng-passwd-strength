import { Component } from '@angular/core';
import { PasswdFieldComponent } from '../passwd-field/passwd-field.component';

@Component({
  selector: 'app-passwd-check-form',
  standalone: true,
  imports: [PasswdFieldComponent],
  templateUrl: './passwd-check-form.component.html',
  styleUrl: './passwd-check-form.component.scss'
})
export class PasswdCheckFormComponent {

}
