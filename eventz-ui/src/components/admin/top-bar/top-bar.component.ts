import { Component } from '@angular/core';
import { faBell, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
    faBell = faBell;
    faDotCircle = faDotCircle;
}
