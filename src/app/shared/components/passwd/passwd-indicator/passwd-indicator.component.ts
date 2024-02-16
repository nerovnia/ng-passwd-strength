import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EPasswordStrength } from '../../../../core/constants/epassword-strength';

const colorsStylesClasses: {[key: string]: string} = {
  gray: "bottom-border-gray",
  red: "bottom-border-red",
  yellow: "bottom-border-yellow",
  green: "bottom-border-green" 
}

@Component({
  selector: 'app-passwd-indicator',
  standalone: true,
  imports: [],
  templateUrl: './passwd-indicator.component.html',
  styleUrl: './passwd-indicator.component.scss'
})
export class PasswdIndicatorComponent implements OnChanges {
  @Input() checkStrengthProp = EPasswordStrength.Empty;

  firstLineColor: string;
  secondLineColor: string;
  thirdLineColor: string;

  constructor() {
    this.firstLineColor = "";
    this.secondLineColor = "";
    this.thirdLineColor = "";
    this.setColors('gray', 'gray', 'gray');
  }

  setColors(firstLineColor: string, secondLineColor: string, thirdLineColor: string) {
    this.firstLineColor = "passwd-indicator-line-comp " + colorsStylesClasses[firstLineColor];
    this.secondLineColor = "passwd-indicator-line-comp " + colorsStylesClasses[secondLineColor];
    this.thirdLineColor = "passwd-indicator-line-comp " + colorsStylesClasses[thirdLineColor];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checkStrengthProp']) {
      const strengthProperty = changes['checkStrengthProp'].currentValue;
      if (strengthProperty === EPasswordStrength.Empty) {
        this.setColors('gray', 'gray', 'gray');
      }
      if (strengthProperty === EPasswordStrength.Less) {
        this.setColors('red', 'red', 'red');
      }
      if (strengthProperty === EPasswordStrength.Easy) {
        this.setColors('red', 'gray', 'gray');
      }
      if (strengthProperty === EPasswordStrength.Medium) {
        this.setColors('yellow', 'yellow', 'gray');
      }
      if (strengthProperty === EPasswordStrength.Strong) {
        this.setColors('green', 'green', 'green');
      }
    }
  }
}
