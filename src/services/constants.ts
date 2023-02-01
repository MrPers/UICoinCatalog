import { IContactCharts, ITimeStep } from "./types";

export const URLpath = "https://localhost:10000/";
// export const currency: string = "RUB";
// export const scale: string = "year";

export const timeStep: ITimeStep[] = [
    { time: 24, name: "1DAY" },
    { time: 72, name: "3DAY" },
    { time: 120, name: "5DAY" },
    { time: 168, name: "7DAY" },
];

// export const timeStep = new Map().set("1DAY", 34).set("3DAY", 35).set("5DAY", 36).set("7DAY", 37);

export const dataCharts: IContactCharts[] = [
    { id: 0, label: "Prices", backgroundColor:'rgba(255, 165, 0, 0.7)', above: 'rgba(255, 165, 0, 0.5)', volume: []},
    { id: 1, label: "Volume Traded", backgroundColor:'rgba(120, 120, 120, 0.7)', above: 'rgba(255, 99, 71, 0.5)', volume: []},
  ];
