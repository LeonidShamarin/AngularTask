import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  password: string = '';
  strength: string[] = ['', '', ''];

  updateStrength() {
    const length = this.password.length;

    if (length === 0) {
      this.strength = ['gray', 'gray', 'gray'];
    } else if (length < 8) {
      this.strength = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Zа-яА-Я]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = ['green', 'green', 'green'];
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.strength = ['yellow', 'yellow', 'gray'];
      } else if (hasLetters || hasDigits || hasSymbols) {
        this.strength = ['red', 'gray', 'gray'];
      }
    }
  }
}
