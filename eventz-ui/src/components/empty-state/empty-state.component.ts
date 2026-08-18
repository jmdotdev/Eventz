import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendarX, lucideSearchX, lucideTicket } from '@ng-icons/lucide';

export type EmptyStateIcon = 'calendar' | 'ticket' | 'search';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCalendarX, lucideSearchX, lucideTicket })],
  templateUrl: './empty-state.component.html',
})
export class EmptyStateComponent {
  @Input() icon: EmptyStateIcon = 'calendar';
  @Input() title = '';
  @Input() message = '';
  @Input() ctaLabel?: string;
  @Input() dashed = false;
  @Output() cta = new EventEmitter<void>();

  get iconName(): string {
    return this.icon === 'ticket' ? 'lucideTicket' : this.icon === 'search' ? 'lucideSearchX' : 'lucideCalendarX';
  }
}
