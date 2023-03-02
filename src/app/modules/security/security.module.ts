import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { SecurityRouttes } from './security.routing';
import { RefreshComponent } from './pages/refresh/refresh.component';
import { CallbackComponent } from './pages/auth-callback/callback.component';


@NgModule({  
  declarations: [
    SecurityComponent,
    RefreshComponent,
    CallbackComponent,
  ],
  imports: [
    CommonModule, // using these in-built directives like "ngFor, ngIf"
    HttpClientModule,
    SecurityRouttes
  ],
  bootstrap: [SecurityComponent]
})

export class SecurityModule { }
