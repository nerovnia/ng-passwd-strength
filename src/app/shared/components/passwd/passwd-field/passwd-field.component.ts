import { Component } from '@angular/core';
import { PasswdIndicatorComponent } from '../passwd-indicator/passwd-indicator.component';
import { EPasswordStrength } from '../../../../core/constants/epassword-strength';
import { PasswdStrengthCheckService } from '../../../../core/services/passwd-strength-check.service';

@Component({
  selector: 'app-passwd-field',
  standalone: true,
  imports: [PasswdIndicatorComponent],
  templateUrl: './passwd-field.component.html',
  styleUrl: './passwd-field.component.scss'
})
export class PasswdFieldComponent {
  checkStrengthProp = EPasswordStrength.Empty;

  onKey(event: KeyboardEvent) {
    this.checkStrengthProp = PasswdStrengthCheckService.checkStrength((event?.target as HTMLInputElement)?.value);
  }
}

