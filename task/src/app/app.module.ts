import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ValidationSectionsComponent } from './components/validation-sections/validation-sections.component';
import { ValidationService } from './services/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ValidationSectionsComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers:[ValidationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
