import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { BottomTabBarComponent } from '../components/bottom-tab-bar/bottom-tab-bar.component';

// Transactional/auth screens use their own purchase bar or step nav instead of the tab bar.
const CHROME_LESS_PREFIXES = ['/admin', '/login', '/register', '/events', '/checkout'];

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, BottomTabBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eventz-ui';

  private readonly router = inject(Router);

  private readonly isMobile = toSignal(
    inject(BreakpointObserver).observe('(max-width: 767px)').pipe(map(state => state.matches)),
    { initialValue: false },
  );

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly showBottomTabBar = computed(
    () => this.isMobile() && !CHROME_LESS_PREFIXES.some(prefix => this.url().startsWith(prefix)),
  );
}
