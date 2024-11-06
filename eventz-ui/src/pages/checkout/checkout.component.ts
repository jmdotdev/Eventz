import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  watch = faStopwatch;
  location = faMapMarkerAlt;
  ngOnInit(): void {
    
  }

}
