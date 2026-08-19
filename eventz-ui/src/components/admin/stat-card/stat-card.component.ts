import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCalendarDays,
  lucideCoins,
  lucideTicket,
  lucideUsers,
} from '@ng-icons/lucide';

export type StatIcon = 'revenue' | 'tickets' | 'calendar' | 'attendees';
export type StatDeltaTone = 'up' | 'down' | 'neutral';

@Component({
  selector: 'app-admin-stat-card',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCoins, lucideTicket, lucideCalendarDays, lucideUsers })],
  templateUrl: './stat-card.component.html',
})
export class StatCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value = '';
  @Input() icon: StatIcon = 'revenue';
  @Input() delta = '';
  @Input() deltaTone: StatDeltaTone = 'neutral';

  get iconName(): string {
    return this.icon === 'revenue' ? 'lucideCoins' : this.icon === 'tickets' ? 'lucideTicket' : this.icon === 'calendar' ? 'lucideCalendarDays' : 'lucideUsers';
  }

  get deltaClasses(): string {
    return this.deltaTone === 'up' ? 'bg-success-bg text-success-text' : this.deltaTone === 'down' ? 'bg-error-bg text-error-text' : 'bg-brand-tint text-brand';
  }
}
