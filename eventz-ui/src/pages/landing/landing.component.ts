import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CategoriesComponent, AboutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
