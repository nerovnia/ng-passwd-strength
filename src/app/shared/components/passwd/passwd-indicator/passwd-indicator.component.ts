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

  linesColors: string[];

  constructor() {
    const initLineClasses = "passwd-indicator-line-comp";
    this.linesColors = [initLineClasses, initLineClasses, initLineClasses];
    this.setColors(['gray', 'gray', 'gray']);
  }

  private clearColorStyleClass(styleClasses: string) {
    let result = styleClasses;
    for (const property in colorsStylesClasses) {
      result = result.replaceAll(colorsStylesClasses[property], '');
    }
    return result;
  }

  setColors(colors: string[]) {
    this.linesColors = this.linesColors.map((lc, index) => {
      return `${this.clearColorStyleClass(lc)} ${colorsStylesClasses[colors[index]]}`;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['checkStrengthProp']) {
      const strengthProperty = changes['checkStrengthProp'].currentValue;
      if (strengthProperty === EPasswordStrength.Empty) {
        this.setColors(['gray', 'gray', 'gray']);
      }
      if (strengthProperty === EPasswordStrength.Less) {
        this.setColors(['red', 'red', 'red']);
      }
      if (strengthProperty === EPasswordStrength.Easy) {
        this.setColors(['red', 'gray', 'gray']);
      }
      if (strengthProperty === EPasswordStrength.Medium) {
        this.setColors(['yellow', 'yellow', 'gray']);
      }
      if (strengthProperty === EPasswordStrength.Strong) {
        this.setColors(['green', 'green', 'green']);
      }
    }
  }
}
