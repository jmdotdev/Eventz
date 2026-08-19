import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCalendarDays,
  lucideChartColumn,
  lucideCirclePlus,
  lucideCreditCard,
  lucideLayoutDashboard,
  lucideReceiptText,
  lucideSettings,
  lucideTicket,
  lucideUser,
  lucideUsers,
} from '@ng-icons/lucide';
import { ISideNav } from '../../../interfaces/interface';
import { sideNavLinks } from '../data/side-nav-links';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterLink, NgIcon],
  viewProviders: [
    provideIcons({
      lucideLayoutDashboard,
      lucideCalendarDays,
      lucideCirclePlus,
      lucideTicket,
      lucideReceiptText,
      lucideUsers,
      lucideChartColumn,
      lucideCreditCard,
      lucideUser,
      lucideSettings,
    }),
  ],
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  links: ISideNav[] = sideNavLinks;
  @Output() linkClicked = new EventEmitter<void>();

  private readonly router = inject(Router);

  readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => e.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  isActive(link: ISideNav): boolean {
    const url = this.currentUrl().split('?')[0];
    const target = link.path ? `/admin/${link.path}` : '/admin';
    return link.path ? url === target || url.startsWith(target + '/') : url === target;
  }

  onLinkClick(): void {
    this.linkClicked.emit();
  }
}
