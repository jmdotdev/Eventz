import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { RegisterComponent } from '../pages/register/register.component';
import { EventDetailComponent } from '../pages/event-detail/event-detail.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { CartComponent } from '../pages/cart/cart.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { AdminEventsListComponent } from '../pages/admin/admin-events-list/admin-events-list.component';
export const routes: Routes = [
   {path:'',component: LandingComponent},
   {path:'login', component: LoginComponent},
   {path:'register', component: RegisterComponent},
   {path:'event-detail/:id',component: EventDetailComponent},
   {path: 'cart', component: CartComponent },
   {path:'checkout',component: CheckoutComponent},
   {
      path:'admin',component: AdminLayoutComponent, 
      children: [
         {path: '', component: DashboardComponent},
         {path: 'events', component: AdminEventsListComponent}
      ]
   }
];
