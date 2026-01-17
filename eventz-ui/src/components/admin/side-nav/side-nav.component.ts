import { Component } from '@angular/core';
import { ISideNav } from '../../../interfaces/interface';
import { sideNavLinks } from '../data/side-nav-links';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  links: ISideNav[] = sideNavLinks;

  constructor ( private router:Router) {}

  handleNavigation (link: ISideNav) {
    this.links = this.links.map((l) => ({
      ...l,
      isActive: l.name === link.name ? true : false
    }));
    link.name.toLowerCase() === 'dashboard' ? this.router.navigate(['admin']) : this.router.navigate([`admin/${link.name.toLowerCase()}`])
  }
}
