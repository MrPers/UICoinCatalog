import { Directive, Injectable, ViewContainerRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

@Directive({
    selector: "[dynamic-ref]"
})
export class DynamicDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}

interface IObjectKeys {
    [key: string]: string | number;
}

export interface ICoin extends IObjectKeys{
    name:string;
    urlIcon:string;
    id: number;
    prices:number;
    volumeTraded:number;
}

export interface ICoinExchange{
    time:number;
    prices:number;
    volumeTraded:number;
}

export interface ITimeStep{
    name: string;
    time: number;
}

export interface IContactCharts{
    id: number;
    label: string;
    backgroundColor:string;
    above: string;
    volume: number[];
}

export interface IFullChart{
    id: number;
    name: string;
    urlIcon:string;
    genesisDate: string;
    description: string;
}