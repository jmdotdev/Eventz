import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { AboutComponent } from "../../components/about/about.component";
import { EventsComponent } from "../../components/events/events.component";
import { EventComponent } from "../../components/event/event.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ContactformComponent } from "../../components/contactform/contactform.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SearchFormComponent } from "../../components/search-form/search-form.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CategoriesComponent, AboutComponent, EventsComponent, EventComponent, ButtonComponent, ContactformComponent, FooterComponent, SearchFormComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
   
   constructor (private router: Router) {}
   ngOnInit(): void {
      if (typeof window !== "undefined") {
         const token = localStorage.getItem('token')
      if(!token) {
         this.router.navigate(['/login'])
      }
      }
   }
   whiteColor: string = '#fff'
   deepBlue: string ='#fff'
}
