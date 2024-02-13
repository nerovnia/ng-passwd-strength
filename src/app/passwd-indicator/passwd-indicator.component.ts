import { Component } from '@angular/core';
import { PasswdIndicatorLineComponent } from '../passwd-indicator-line/passwd-indicator-line.component';

@Component({
  selector: 'app-passwd-indicator',
  standalone: true,
  imports: [PasswdIndicatorLineComponent],
  templateUrl: './passwd-indicator.component.html',
  styleUrl: './passwd-indicator.component.scss'
})
export class PasswdIndicatorComponent {

}
