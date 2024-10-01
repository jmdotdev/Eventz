import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { AboutComponent } from "../../components/about/about.component";
import { EventsComponent } from "../../components/events/events.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CategoriesComponent, AboutComponent, EventsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
