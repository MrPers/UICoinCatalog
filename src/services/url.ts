import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, Observable, retry } from 'rxjs';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath } from './constants';
import { ICoin, ICoinExchange, IFullChart } from './types';

@Injectable({
  providedIn: 'root'
})

export class URLService {

  constructor(private http:HttpClient ) {}

  addCoin(name: string, ticks: number) : Observable<any> {
    var formData: any = new FormData();
    formData.append('ticks', ticks);
    return this.http.post(URLpath + 'Coin/add-coin-&-coinExchanges/' + name, formData)
    .pipe(debounceTime(1000));
  };

  getAllCoins() : Observable<ICoin[]> {
    return this.http.get<ICoin[]>(URLpath + 'Coin/get-coins-all-previous-information')
    .pipe(retry(2));
  };

  getCoinsById(id: number) : Observable<ICoinExchange[]> {
    return this.http.get<ICoinExchange[]>(URLpath + 'Coin/get-coinExchanges-by-coin-id/' + id)
    .pipe(debounceTime(1000));
  };

  getCoinById(id: number) : Observable<IFullChart> {
    return this.http.get<IFullChart>(URLpath + 'Coin/get-coin-full-information-by-coin-id/' + id)
    .pipe(debounceTime(1000));
  };

  deleteCoin(id: number) : Observable<any> {
    return this.http.delete(URLpath +"Coin/delete-coin-and-coinExchanges/" + id);
  };

  updateCoin(id: number) : Observable<boolean> {
    return this.http.get<boolean>(URLpath +"Coin/update-coin-by-id-coin/" + id);
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


