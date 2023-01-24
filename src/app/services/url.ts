import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, Observable } from 'rxjs';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath } from './constants';

@Injectable({
  providedIn: 'root'
})

export class URLService {

  constructor(private http:HttpClient ) {}

  // addCurrencies(currency: any){
  //   return this.http.post(URLpath + 'addcurrency', currency, {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   });
  // };

  getAllCoins() : Observable<any> {
    return this.http.get(URLpath + 'Coin/get-all-coins-with-previous-information');
  };

  getCoinById(id: number) : Observable<any> {
    // const params = new HttpParams().append('id', id);
    // return this.http.get(URLpath + 'Coin/get-by-coin-id-coinExchanges/', {params});
    return this.http.get(URLpath + 'Coin/get-by-coin-id-coinExchanges/' + id)
    .pipe(debounceTime(1000));
  };

  getRestResponse() : Observable<any> {
    return this.http.get("https://rest.coinapi.io/v1/assets/icons/32", 
    // return this.http.get("https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=8HRS&time_start=2020-01-01T00:00:00&limit=9200", 
    // return this.http.get("https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1HRS&time_start=2020-01-01T00:00:00&limit=26304", 
    {
      // headers: new HttpHeaders({'X-CoinAPI-Key': '3F7B52C1-065A-49AE-9953-78CA0534C9BC'})
      headers: new HttpHeaders({'X-CoinAPI-Key': 'A28CDFC3-9421-46D0-B585-C3F2CA053B18'})
    });
  };

  // var client = new RestClient("https://rest.coinapi.io/v1/assets/icons/32");
  // var request = new RestRequest(Method.GET);
  // request.AddHeader("X-CoinAPI-Key", "73034021-THIS-IS-SAMPLE-KEY");
  // IRestResponse response = client.Execute(request);


  // registerUser(body: any) : Observable<any> {
  //   return this.http.post(URLpath + "regist", body, {
  //     headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   });
  // };

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


