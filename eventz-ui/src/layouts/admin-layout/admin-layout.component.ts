import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu } from '@ng-icons/lucide';
import { SideNavComponent } from "../../components/admin/side-nav/side-nav.component";

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [SideNavComponent, RouterOutlet, NgIcon],
    viewProviders: [provideIcons({ lucideMenu })],
    templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  readonly showSideNav = signal(false);

  toggleSideNav(): void {
    this.showSideNav.update(v => !v);
  }

  closeSideNav(): void {
    this.showSideNav.set(false);
  }
}
