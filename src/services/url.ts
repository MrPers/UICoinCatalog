import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, Observable, retry } from 'rxjs';
import { AuthService } from './auth';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { Constants } from './constants';
import { FullChart, ICoin, ICoinExchange } from './types';

@Injectable({
  providedIn: 'root'
})

export class URLService {

  constructor(private http:HttpClient, private authService: AuthService ) {}

  addCoin(name: string, ticks: number) : Observable<any> {
    var formData: any = new FormData();
    formData.append('ticks', ticks);
    return this.http.post(Constants.apiURL + 'Coin/add-coin-&-coinExchanges/' + name, formData, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  getAllCoins() : Observable<ICoin[]> {
    return this.http.get<ICoin[]>(Constants.apiURL + 'Coin/get-coins-all-previous-information', { headers: this.authService.getAuthorizationHeaderValue()});
  };

  getCoinsById(formData: {id: number, step: number}) : Observable<ICoinExchange[]> {
    return this.http.post<ICoinExchange[]>(Constants.apiURL + 'Coin/get-coinExchanges', formData, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  getCoinById(id: number) : Observable<FullChart> {
    return this.http.get<FullChart>(Constants.apiURL + 'Coin/get-coin-full-information-by-coin-id/' + id, { headers: this.authService.getAuthorizationHeaderValue()})
    .pipe(retry(2));
  };

  deleteCoin(id: number) : Observable<any> {
    return this.http.delete(Constants.apiURL +"Coin/delete-coin-and-coinExchanges/" + id, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  updateCoin(id: number) : Observable<boolean> {
    return this.http.get<boolean>(Constants.apiURL +"Coin/update-coin-by-id-coin/" + id, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  // addCurrenciesHistory(input: any, name: string) : Observable<any> {
  //   let testData:FormData = new FormData();
  //   testData.append('file', input, name + '/' + input.name);
  //   return this.http.post(URLpath + "addcurrencyhistory", testData, {
  //     //  и без этого работает, надо разобраться
  //     reportProgress: true, // Без observe: 'events' не работает
  //     observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
  //   });
  // };
}


