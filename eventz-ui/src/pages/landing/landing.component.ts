import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CategoriesComponent } from "../../components/categories/categories.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CategoriesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
