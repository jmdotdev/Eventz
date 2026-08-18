import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideHeart } from '@ng-icons/lucide';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { ZardButtonComponent } from '../../app/shared/components/button';
import { AccountService } from '../../services/account/account.service';
import { TicketsService } from '../../services/tickets/tickets.service';
import { AccountStats, EventListing, MyTicket, RecentlyViewedItem } from '../../interfaces/event.interface';
import { formatEventDate, formatKes } from '../../utils/format';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, EventCardComponent, EmptyStateComponent, ZardButtonComponent, NgIcon, RouterLink],
  viewProviders: [provideIcons({ lucideHeart })],
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  readonly upcomingTickets = signal<MyTicket[]>([]);
  readonly recommended = signal<EventListing[]>([]);
  readonly saved = signal<EventListing[]>([]);
  readonly recentlyViewed = signal<RecentlyViewedItem[]>([]);
  readonly stats = signal<AccountStats>({ attended: 0, upcoming: 0, saved: 0 });

  readonly formatDate = formatEventDate;
  readonly formatPrice = formatKes;

  constructor(private accountService: AccountService, private ticketsService: TicketsService) {}

  ngOnInit(): void {
    this.ticketsService.getTickets().subscribe(tickets => this.upcomingTickets.set(tickets.filter(t => t.when === 'upcoming' && t.status === 'valid')));
    this.accountService.getRecommended().subscribe(events => this.recommended.set(events));
    this.accountService.getSaved().subscribe(events => this.saved.set(events));
    this.accountService.getRecentlyViewed().subscribe(items => this.recentlyViewed.set(items));
    this.accountService.getStats().subscribe(stats => this.stats.set(stats));
  }
}
