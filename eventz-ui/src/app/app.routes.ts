import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LandingComponent } from '../pages/landing/landing.component';
import { RegisterComponent } from '../pages/register/register.component';
import { EventDetailComponent } from '../pages/event-detail/event-detail.component';
export const routes: Routes = [
   {path:'',component: LandingComponent},
   {path:'login', component: LoginComponent},
   {path:'register', component: RegisterComponent},
   {path:'event-detail/:id',component: EventDetailComponent}
];
