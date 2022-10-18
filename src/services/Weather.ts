export interface Weather {
    type: string;
    properties: Properties;
}
export interface Properties {
    units: string;
    periods: Period[];
}
export interface Period {
    name: string;
    temperature: number;
    temperatureUnit: string;
    detailedForecast: string;
    icon: string;
}