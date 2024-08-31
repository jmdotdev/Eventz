import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import path from 'node:path';
import { RegisterComponent } from '../pages/register/register.component';
export const routes: Routes = [
   {path:'', component: RegisterComponent},
   {path:'login', component: LoginComponent}
];
