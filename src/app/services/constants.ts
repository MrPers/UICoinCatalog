import { contactCharts } from "./types";

export const URLpath = "https://localhost:10000/";
// export const currency: string = "RUB";
// export const scale: string = "year";
export const timeStep: Array<string> = [
    '1HRS',
    '2HRS',
    '6HRS',
    '8HRS',
    '12HRS',
    '1DAY',
];
export const timePeriod: Array<string> = [
    '1M',
    '3M',
    '6M',
    '1Y',
    'ALL',
];
export const dataCharts: contactCharts[] = [
    { id: 0, label: "Prices", backgroundColor:'rgba(255, 165, 0, 0.7)', above: 'rgba(255, 165, 0, 0.5)', volume: []},
    { id: 1, label: "Volume Traded", backgroundColor:'rgba(120, 120, 120, 0.7)', above: 'rgba(255, 99, 71, 0.5)', volume: []},
  ];
