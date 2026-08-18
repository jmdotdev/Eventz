import { Component, computed, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucideSendHorizontal, lucideTicket } from '@ng-icons/lucide';
import { MyTicket } from '../../interfaces/event.interface';
import { QrCodeComponent } from '../qr-code/qr-code.component';
import { formatEventDate, formatFullDate, formatTime } from '../../utils/format';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [NgIcon, QrCodeComponent],
  viewProviders: [provideIcons({ lucideTicket, lucideDownload, lucideSendHorizontal })],
  templateUrl: './ticket-card.component.html',
})
export class TicketCardComponent {
  @Input({ required: true }) ticket!: MyTicket;

  readonly dateLabel = computed(() => `${formatEventDate(this.ticket.event.dateTime)} · ${formatTime(this.ticket.event.dateTime)}`);
  readonly wasDateLabel = computed(() => `WAS ${formatFullDate(this.ticket.event.dateTime).toUpperCase()}`);
  readonly qrSize = computed(() => (this.ticket.featured ? 150 : 96));
}
