import { Component } from '@angular/core';
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password: string = '';
  strength: string[] = ['', '', ''];

  constructor(private validationService: ValidationService) {}

  updateStrength() {
    this.strength = this.validationService.getPasswordStrength(this.password);
  }
}
