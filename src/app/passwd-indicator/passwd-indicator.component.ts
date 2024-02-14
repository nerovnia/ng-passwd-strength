import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { PasswdIndicatorLineComponent } from '../passwd-indicator-line/passwd-indicator-line.component';
import { EPasswordStrength } from '../epassword-strength';

@Component({
  selector: 'app-passwd-indicator',
  standalone: true,
  imports: [PasswdIndicatorLineComponent],
  templateUrl: './passwd-indicator.component.html',
  styleUrl: './passwd-indicator.component.scss'
})
export class PasswdIndicatorComponent  implements OnChanges {
  @Input() checkStrengthProperty = EPasswordStrength.Empty;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['checkStrengthProperty']) {
      console.log(changes['checkStrengthProperty'].currentValue);
    }
    
  }
}
