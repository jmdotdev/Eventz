import { Routes } from '@angular/router';
export const routes: Routes = [
   {path:'',loadComponent: () => import('../pages/landing/landing.component').then(m => m.LandingComponent)},
   {path:'login', loadComponent: () => import('../pages/login/login.component').then(m => m.LoginComponent)},
   {path:'register', loadComponent: () => import('../pages/register/register.component').then(m => m.RegisterComponent)},
   {path:'events/:id',loadComponent: () => import('../pages/event-detail/event-detail.component').then(m => m.EventDetailComponent)},
   {path:'checkout',loadComponent: () => import('../pages/checkout/checkout.component').then(m => m.CheckoutComponent)},
   {path:'account',loadComponent: () => import('../pages/account/account.component').then(m => m.AccountComponent)},
   {path:'tickets',loadComponent: () => import('../pages/tickets/tickets.component').then(m => m.TicketsComponent)},
   {
      path:'admin',loadComponent: () => import('../layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
      children: [
         {path: '', loadComponent: () => import('../pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)},
         {path: 'events', loadComponent: () => import('../pages/admin/admin-events-list/admin-events-list.component').then(m => m.AdminEventsListComponent)},
         {path: 'tickets', loadComponent: () => import('../pages/admin/ticket-list-table/ticket-list-table.component').then(m => m.TicketListTableComponent)},
         {path: 'users', loadComponent: () => import('../pages/admin/user-list-table/user-list-table.component').then(m => m.UserListTableComponent)},
         {path: 'create-ticket', loadComponent: () => import('../pages/admin/create-ticket/create-ticket.component').then(m => m.CreateTicketComponent)},
         {path: 'create-event', loadComponent: () => import('../pages/admin/create-event/create-event.component').then(m => m.CreateEventComponent)}
      ]
   }
];
