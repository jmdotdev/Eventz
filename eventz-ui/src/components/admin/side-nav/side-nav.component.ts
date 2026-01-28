import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class SideNavComponent implements OnInit {
  links: ISideNav[] = sideNavLinks;
  activeLink: ISideNav | undefined;
  @Output() selectedLinkEmitter = new EventEmitter<string>();

  constructor ( private router:Router) {}
  ngOnInit(): void {
    this.activeLink = this.links.find(link => link.name.toLowerCase() === (this.router.url.split('/')[2] || 'dashboard'));
    if (this.activeLink) {
      this.links = this.links.map((l) => ({
        ...l,
        isActive: l.name === this.activeLink?.name ? true : false
      }));
      this.selectedLinkEmitter.emit(this.activeLink.name);
    }
  }

  handleNavigation (link: ISideNav) {
    this.links = this.links.map((l) => ({
      ...l,
      isActive: l.name === link.name ? true : false
    }));
    link.name.toLowerCase() === 'dashboard' ? this.router.navigate(['admin']) : this.router.navigate([`admin/${link.name.toLowerCase()}`]);
    this.selectedLinkEmitter.emit(link.name);
  }
}
