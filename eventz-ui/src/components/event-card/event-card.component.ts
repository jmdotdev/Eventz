import { DatePipe } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHeart, lucideMapPin } from '@ng-icons/lucide';
import { EventListing } from '../../interfaces/event.interface';
import { formatEventDate, formatKes, formatTime } from '../../utils/format';

export type EventCardVariant = 'grid' | 'list';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [RouterLink, NgIcon, DatePipe],
  viewProviders: [provideIcons({ lucideHeart, lucideMapPin })],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input({ required: true }) event!: EventListing;
  @Input() variant: EventCardVariant = 'grid';
  @Input() saved = false;
  @Output() toggleSave = new EventEmitter<string>();

  readonly dateLabel = computed(() => `${formatEventDate(this.event.dateTime)} · ${formatTime(this.event.dateTime)}`);

  readonly lowStockLabel = computed(() => {
    const lowest = this.event.ticketTiers
      .filter(t => !t.soldOut)
      .reduce((min, t) => Math.min(min, t.remaining), Infinity);
    return Number.isFinite(lowest) ? `${lowest} LEFT` : '';
  });

  readonly priceLabel = computed(() => formatKes(this.event.priceFrom));

  onToggleSave(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.toggleSave.emit(this.event.id);
  }
}
