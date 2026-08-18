import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCompass, lucideHeart, lucideTicket, lucideUser } from '@ng-icons/lucide';

@Component({
  selector: 'app-bottom-tab-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIcon],
  viewProviders: [provideIcons({ lucideCompass, lucideHeart, lucideTicket, lucideUser })],
  templateUrl: './bottom-tab-bar.component.html',
})
export class BottomTabBarComponent {}
