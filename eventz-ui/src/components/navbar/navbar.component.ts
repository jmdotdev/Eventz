import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell, lucideChevronDown, lucideLayoutDashboard, lucideSearch } from '@ng-icons/lucide';
import { ZardButtonComponent } from '../../app/shared/components/button';

export type NavbarVariant = 'landing' | 'simplified' | 'account';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIcon, ZardButtonComponent],
  viewProviders: [provideIcons({ lucideSearch, lucideBell, lucideChevronDown, lucideLayoutDashboard })],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() variant: NavbarVariant = 'landing';
}
