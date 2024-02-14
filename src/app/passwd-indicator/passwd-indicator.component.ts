import { Component, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { PasswdIndicatorLineComponent } from '../passwd-indicator-line/passwd-indicator-line.component';
import { EPasswordStrength } from '../epassword-strength';
import { EIndicatorColors } from '../eindicator-colors';
@Component({
  selector: 'app-passwd-indicator',
  standalone: true,
  imports: [PasswdIndicatorLineComponent],
  templateUrl: './passwd-indicator.component.html',
  styleUrl: './passwd-indicator.component.scss'
})
export class PasswdIndicatorComponent  implements OnChanges {
  @Input() checkStrengthProp = EPasswordStrength.Empty;

  firstLineColor = "passwd-indicator-line-comp bottom-border-gray";
  secondLineColor = "passwd-indicator-line-comp bottom-border-gray";
  thirdLineColor = "passwd-indicator-line-comp bottom-border-gray";

  setColors(firstLineColor: string, secondLineColor: string, thirdLineColor: string) {
    this.firstLineColor = "passwd-indicator-line-comp " + firstLineColor;
    this.secondLineColor = "passwd-indicator-line-comp " + secondLineColor;
    this.thirdLineColor = "passwd-indicator-line-comp " + thirdLineColor;
}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['checkStrengthProp']) {
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Empty) {
        this.setColors("bottom-border-gray", "bottom-border-gray", "bottom-border-gray");
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Less) {
        this.setColors("bottom-border-red", "bottom-border-red", "bottom-border-red");
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Easy) {
        this.setColors("bottom-border-red", "bottom-border-gray", "bottom-border-gray");
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Medium) {
        this.setColors("bottom-border-yellow", "bottom-border-yellow", "bottom-border-gray");
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Strong) {
        this.setColors("bottom-border-green", "bottom-border-green", "bottom-border-green");
      }
    }
  }
}
