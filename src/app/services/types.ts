import { Directive, Injectable, ViewContainerRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

@Directive({
    selector: '[appRef]'
})

export class RefDirective{
    constructor(public containerRef: ViewContainerRef){}
}

interface IObjectKeys {
    [key: string]: string | number;
}

export interface Coin extends IObjectKeys{
    name:string;
    id: number;
    prices:number;
    volumeTraded:number;
}

export interface CoinExchange{
    time:number;
    // id: number;
    prices:number;
    volumeTraded:number;
}

export interface contactCharts{
    id: number;
    label: string;
    backgroundColor:string;
    above: string;
    volume: number[];
}