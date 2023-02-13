import { NgModule } from '@angular/core';
import { TableCoinComponent } from './pages/table-coin/table.component';
import { ChartCoinComponent } from './pages/chart-coin/chart.component';
import { RefreshCoinComponent } from './pages/refresh-coin/refresh-coin.component';
import { AddCoinComponent } from './pages/add-coin/add-coin.component';
import { DeleteCoinComponent } from './pages/delete-coin/delete-coin.component';
import { CoinComponent } from './coin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { CoinRouterModule } from './coin.routing';
import { AppRoutes } from '../../app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoinRouttes } from './coin.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from '../../../services/types';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({  
declarations: [
  CoinComponent,
  TableCoinComponent,
  ChartCoinComponent,
  RefreshCoinComponent,
  AddCoinComponent,
  DeleteCoinComponent,
  DynamicDirective
],
imports: [
  CommonModule, // using these in-built directives like "ngFor, ngIf"
  HttpClientModule,
  FormsModule, 
  ReactiveFormsModule,
  CoinRouttes
],
entryComponents: [
  RefreshCoinComponent,
  AddCoinComponent,
  DeleteCoinComponent
],
providers: [
],
bootstrap: [CoinComponent]
})

export class CoinModule { }
