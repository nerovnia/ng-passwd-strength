import { Injectable } from '@angular/core';
import { EPasswordStrength } from '../../core/constants/epassword-strength';

@Injectable({
  providedIn: 'root'
})
export class PasswdStrengthCheckService {

  static checkStrength(password: string) {
    let hasLetters = false;
    let hasDigits = false;
    let hasSymbols = false;

    if ((password.length === 0) || (typeof password !== 'string')) return EPasswordStrength.Empty;
    if (password.length < 8) return EPasswordStrength.Less;

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
      return EPasswordStrength.Easy;
    }

    if ((hasLetters && !hasDigits && hasSymbols)
    || (hasLetters && hasDigits && !hasSymbols)
    || (!hasLetters && hasDigits && hasSymbols)) {
      return EPasswordStrength.Medium;
    }
    return EPasswordStrength.Strong; 
  }

  constructor() { }
}
