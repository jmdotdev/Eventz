import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight, lucideDownload, lucideSendHorizontal } from '@ng-icons/lucide';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TicketCardComponent } from '../../components/ticket-card/ticket-card.component';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { QrCodeComponent } from '../../components/qr-code/qr-code.component';
import { TicketsService } from '../../services/tickets/tickets.service';
import { MyTicket } from '../../interfaces/event.interface';

type TicketTab = 'upcoming' | 'past' | 'transferred';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TicketCardComponent, EmptyStateComponent, QrCodeComponent, NgIcon, DatePipe],
  viewProviders: [provideIcons({ lucideChevronLeft, lucideChevronRight, lucideDownload, lucideSendHorizontal })],
  templateUrl: './tickets.component.html',
})
export class TicketsComponent implements OnInit {
  private readonly ticketsService = inject(TicketsService);

  readonly allTickets = signal<MyTicket[]>([]);
  readonly activeTab = signal<TicketTab>('upcoming');
  readonly walletIndex = signal(0);

  readonly isMobile = toSignal(
    inject(BreakpointObserver).observe('(max-width: 767px)').pipe(map(state => state.matches)),
    { initialValue: false },
  );

  readonly counts = computed(() => ({
    upcoming: this.allTickets().filter(t => t.when === 'upcoming').length,
    past: this.allTickets().filter(t => t.when === 'past').length,
    transferred: this.allTickets().filter(t => t.when === 'transferred').length,
  }));

  readonly filteredTickets = computed(() => this.allTickets().filter(t => t.when === this.activeTab()));

  readonly showWallet = computed(() => this.isMobile() && this.activeTab() === 'upcoming' && this.filteredTickets().length > 0);

  readonly walletTicket = computed(() => this.filteredTickets()[this.walletIndex()] ?? null);

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(tickets => this.allTickets.set(tickets));
  }

  setTab(tab: TicketTab): void {
    this.activeTab.set(tab);
    this.walletIndex.set(0);
  }

  prevWalletTicket(): void {
    this.walletIndex.update(i => Math.max(0, i - 1));
  }

  nextWalletTicket(): void {
    this.walletIndex.update(i => Math.min(this.filteredTickets().length - 1, i + 1));
  }
}
