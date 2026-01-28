import { Component, EventEmitter, Output } from '@angular/core';
import { SideNavComponent } from "../../components/admin/side-nav/side-nav.component";
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "../../components/admin/top-bar/top-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, SideNavComponent, RouterOutlet, TopBarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  showSideNav = false;
  activeLink: string = '';


  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
  handleEmittedLink(linkName: string) {
    this.activeLink = linkName;
    console.log('Active Link in Layout:', this.activeLink);
  }
}
