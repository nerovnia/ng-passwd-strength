import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EPasswordStrength } from '../../../../core/constants/epassword-strength';
import { colorsStylesClasses } from './colorsStylesClasses'

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
    const initLineClasses = "passwd-indicator-line-comp";

    this.firstLineColor = initLineClasses;
    this.secondLineColor = initLineClasses;
    this.thirdLineColor = initLineClasses;
    this.setColors('gray', 'gray', 'gray');
  }

  private clearColorStyleClass(styleClasses: string) {
    let result = styleClasses;
    for (const property in colorsStylesClasses) {
      result = result.replaceAll(colorsStylesClasses[property], '');
    }
    return result;
  }

  setColors(firstLineColor: string, secondLineColor: string, thirdLineColor: string) {
    this.firstLineColor = this.clearColorStyleClass(this.firstLineColor) + ' ' + colorsStylesClasses[firstLineColor];
    this.secondLineColor = this.clearColorStyleClass(this.secondLineColor) + ' ' +  colorsStylesClasses[secondLineColor];
    this.thirdLineColor = this.clearColorStyleClass(this.thirdLineColor) + ' ' +  colorsStylesClasses[thirdLineColor];
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
