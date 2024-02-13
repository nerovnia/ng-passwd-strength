import { Component } from '@angular/core';
import { PasswdIndicatorComponent } from '../passwd-indicator/passwd-indicator.component';

enum PasswordStrength {
  Empty = 1,
  Less,
  Easy,
  Medium,
  Strong,
}

@Component({
  selector: 'app-passwd-field',
  standalone: true,
  imports: [PasswdIndicatorComponent],
  templateUrl: './passwd-field.component.html',
  styleUrl: './passwd-field.component.scss'
})
export class PasswdFieldComponent {

  onKey(event: KeyboardEvent) {
    console.log(this.checkStrength((event?.target as HTMLInputElement)?.value));
  }
  
  checkStrength(password: string) {
    let hasLetters = false;
    let hasDigits = false;
    let hasSymbols = false;

    if ((password.length === 0) || (typeof password !== 'string')) return PasswordStrength.Empty;
    if (password.length < 8) return PasswordStrength.Less;

    for (const ch of password.split('')) {
      let isSelectCat = false;
      const chCode = ch.charCodeAt(0);
      if(((chCode > 64) && (chCode < 91)) ||
        ((chCode > 96) && (chCode < 123))
      ) {
        hasLetters = true;
        isSelectCat = true;
      }
      if((chCode > 47) && (chCode < 58)) {
        hasDigits = true;
        isSelectCat = true;
      }
      if(!isSelectCat) {
        hasSymbols = true;
      }
    }

    if ((hasLetters && !hasDigits && !hasSymbols)
    || (!hasLetters && hasDigits && !hasSymbols)
    || (!hasLetters && !hasDigits && hasSymbols)) {
      return PasswordStrength.Easy;
    }

    if ((hasLetters && !hasDigits && hasSymbols)
    || (hasLetters && hasDigits && !hasSymbols)
    || (!hasLetters && hasDigits && hasSymbols)) {
      return PasswordStrength.Medium;
    }
    return PasswordStrength.Strong; 
  }

}

