import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { AboutComponent } from "../../components/about/about.component";
import { EventsComponent } from "../../components/events/events.component";
import { EventComponent } from "../../components/event/event.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ContactformComponent } from "../../components/contactform/contactform.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CategoriesComponent, AboutComponent, EventsComponent, EventComponent, ButtonComponent, ContactformComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
   whiteColor: string = '#fff'
   deepBlue: string ='#fff'
}
