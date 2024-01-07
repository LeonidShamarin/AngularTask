import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
