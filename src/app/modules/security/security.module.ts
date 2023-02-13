import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { SecurityRouttes } from './security.routing';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({  
declarations: [
  SecurityComponent,
],
imports: [
  CommonModule, // using these in-built directives like "ngFor, ngIf"
  HttpClientModule,
  // FormsModule, 
  // ReactiveFormsModule,
  SecurityRouttes
],
entryComponents: [
],
providers: [
],
bootstrap: [SecurityComponent]
})

export class CoinModule { }
