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

  setColors(firstLine: string, secondLine: string, thirdLine: string) {
    this.firstLineColor = firstLine;
    this.secondLineColor = secondLine;
    this.thirdLineColor = thirdLine;
}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['checkStrengthProp']) {
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Empty) {
        this.firstLineColor = "passwd-indicator-line-comp bottom-border-gray";
        this.secondLineColor = "passwd-indicator-line-comp bottom-border-gray";
        this.thirdLineColor = "passwd-indicator-line-comp bottom-border-gray";
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Less) {
        this.firstLineColor = "passwd-indicator-line-comp bottom-border-red";
        this.secondLineColor = "passwd-indicator-line-comp bottom-border-red";
        this.thirdLineColor = "passwd-indicator-line-comp bottom-border-red";
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Easy) {
        this.firstLineColor = "passwd-indicator-line-comp bottom-border-red";
        this.secondLineColor = "passwd-indicator-line-comp bottom-border-gray";
        this.thirdLineColor = "passwd-indicator-line-comp bottom-border-gray";
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Medium) {
        this.firstLineColor = "passwd-indicator-line-comp bottom-border-yellow";
        this.secondLineColor = "passwd-indicator-line-comp bottom-border-yellow";
        this.thirdLineColor = "passwd-indicator-line-comp bottom-border-gray";
      }
      if(changes['checkStrengthProp'].currentValue === EPasswordStrength.Strong) {
        this.firstLineColor = "passwd-indicator-line-comp bottom-border-green";
        this.secondLineColor = "passwd-indicator-line-comp bottom-border-green";
        this.thirdLineColor = "passwd-indicator-line-comp bottom-border-green";
      }
    }
  }
}
