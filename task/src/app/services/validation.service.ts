import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  getPasswordStrength(password: string): string[] {
    const strength: string[] = ['', '', ''];
    const length = password.length;

    if (length === 0) {
      return ['gray', 'gray', 'gray'];
    } else if (length < 8) {
      return ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Zа-яА-Я]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return ['green', 'green', 'green'];
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        return ['yellow', 'yellow', 'gray'];
      } else if (hasLetters || hasDigits || hasSymbols) {
        return ['red', 'gray', 'gray'];
      }
    }

    return strength;
  }
}
