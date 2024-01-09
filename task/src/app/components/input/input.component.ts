import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();

  onInputChange() {
    this.passwordChange.emit(this.password);
  }
}
