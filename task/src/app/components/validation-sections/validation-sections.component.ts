import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-sections',
  templateUrl: './validation-sections.component.html',
  styleUrl: './validation-sections.component.css',
})
export class ValidationSectionsComponent {
  @Input() color: string = '';
}
