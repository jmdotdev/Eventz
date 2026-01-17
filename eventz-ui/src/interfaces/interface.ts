import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IRoutes {
    name: string;
    path?: string;
}

export interface IEvent {
    id: string
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

export interface ILogin {
    email: string,
    password: string,
    errored?: boolean,
    token?: string | undefined
}

export interface IRegister {
    email: string,
    password: string,
    errored?: boolean
}

export interface ISideNav {
    name: string;
    path: string;
    isActive: boolean;
    icon: IconProp
}
export interface EventItem {
  name: string;
  location: string;
  organizedBy: string;
  verified: boolean;
  date: string;
}

export interface Organizer {
  name: string;
  email: string;
  verified: boolean;
  date: string;
}