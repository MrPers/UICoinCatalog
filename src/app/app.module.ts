import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { TableComponent } from './pages/table/table.component';
import { ErrorComponent } from './elements/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ConstantsService } from './services/constants.service';
// import { CurrencyService } from './services/currency.service';
import { HeaderComponent } from './/elements/header/header.component';
import { ChartComponent } from './pages/chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { RefreshCoinComponent } from './pages/refresh-coin/refresh-coin.component';
import { AddCoinComponent } from './pages/add-coin/add-coin.component';
import { DeleteCoinComponent } from './pages/delete-coin/delete-coin.component';
import { RefDirective } from './services/types';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [	
        AppComponent,
        TableComponent,
        ErrorComponent,
        HeaderComponent,
        ChartComponent,
        RefreshCoinComponent,
        AddCoinComponent,
        DeleteCoinComponent,
        RefDirective
    ],
    providers: [
        // CurrencyService,
        // ConstantsService,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        RefreshCoinComponent,
        AddCoinComponent,
        DeleteCoinComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutes,
        HttpClientModule,
        FormsModule
        // LayoutModule,
        // NavComponent
    ]
})
export class AppModule { }