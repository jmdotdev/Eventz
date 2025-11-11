import { faHome, faPaperPlane, faTelevision, faUser } from "@fortawesome/free-solid-svg-icons";
import { ISideNav } from "../../../interfaces/interface";

export const sideNavLinks: ISideNav[] = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        isActive: true,
        icon: faHome
    },
        {
        name: 'Events',
        path: 'events',
        isActive: false,
        icon: faTelevision
    },
        {
        name: 'Tickets',
        path: 'tickets',
        isActive: false,
        icon: faPaperPlane
    },
        {
        name: 'Profile',
        path: 'profile',
        isActive: false,
        icon: faUser
    }
]
