import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faBell, faDotCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
    faBell = faBell;
    faDotCircle = faDotCircle;
    faBars = faBars;
    @Output() menuClick = new EventEmitter<void>();
    @Input() activeLink: string = '';
}
