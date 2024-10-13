export interface IRoutes {
    name: string;
    path?: string;
}

export interface IEvent {
    icon?: string;
    title: string;
    description: string;
    date: IDate;
    price: string;
    active: boolean;
}

export interface IEventCategory {
    title: string;
    description: string;
    active: boolean;
}

export interface IDate {
    day:number;
    month: string;
}