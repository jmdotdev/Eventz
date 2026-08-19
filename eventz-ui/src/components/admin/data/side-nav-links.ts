import { ISideNav } from "../../../interfaces/interface";

export const sideNavLinks: ISideNav[] = [
    { name: 'Dashboard', path: '', icon: 'lucideLayoutDashboard' },
    { name: 'Events', path: 'events', icon: 'lucideCalendarDays' },
    { name: 'Create Event', path: 'create-event', icon: 'lucideCirclePlus' },
    { name: 'Tickets', path: 'tickets', icon: 'lucideTicket' },
    { name: 'Orders', path: 'orders', icon: 'lucideReceiptText', badge: '14' },
    { name: 'Attendees', path: 'attendees', icon: 'lucideUsers' },
    { name: 'Analytics', path: 'analytics', icon: 'lucideChartColumn' },
    { name: 'Payouts', path: 'payouts', icon: 'lucideCreditCard' },
    { name: 'Customers', path: 'users', icon: 'lucideUser' },
    { name: 'Settings', path: 'settings', icon: 'lucideSettings' },
]
