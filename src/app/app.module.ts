import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { ErrorComponent } from './elements/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './/elements/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDirective} from '../services/types';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorComponent } from './elements/global-error/global-error.component';
import { FocusDirective } from '../directives/focus.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [	
        AppComponent,
        ErrorComponent,
        HeaderComponent,
        GlobalErrorComponent,
        FocusDirective
    ],
    imports: [
        HttpClientModule, // need child module
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutes,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }