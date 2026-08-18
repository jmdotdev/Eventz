import { DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideBriefcase,
  lucideChevronLeft,
  lucideChevronRight,
  lucideDumbbell,
  lucideMapPin,
  lucideMic,
  lucideMonitor,
  lucideMusic,
  lucidePalette,
  lucidePartyPopper,
  lucideSearch,
  lucideSmile,
  lucideUsers,
  lucideUsersRound,
  lucideUtensils,
  lucideZap,
} from '@ng-icons/lucide';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { FilterChipComponent } from '../../components/filter-chip/filter-chip.component';
import { ZardButtonComponent } from '../../app/shared/components/button';
import { EventsService } from '../../services/events/events.service';
import { EventListing } from '../../interfaces/event.interface';
import { formatKes } from '../../utils/format';

const CATEGORY_ICONS: Record<string, string> = {
  Music: 'lucideMusic',
  Parties: 'lucidePartyPopper',
  Conferences: 'lucideMic',
  Sports: 'lucideDumbbell',
  Comedy: 'lucideSmile',
  'Food & Drink': 'lucideUtensils',
  'Arts & Culture': 'lucidePalette',
  Business: 'lucideBriefcase',
  Technology: 'lucideMonitor',
  Workshops: 'lucideZap',
  Family: 'lucideUsers',
  Networking: 'lucideUsersRound',
};

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, EventCardComponent, FilterChipComponent, ZardButtonComponent, NgIcon, RouterLink, DatePipe],
  viewProviders: [
    provideIcons({
      lucideSearch,
      lucideMapPin,
      lucideChevronLeft,
      lucideChevronRight,
      lucideMusic,
      lucidePartyPopper,
      lucideMic,
      lucideDumbbell,
      lucideSmile,
      lucideUtensils,
      lucidePalette,
      lucideBriefcase,
      lucideMonitor,
      lucideZap,
      lucideUsers,
      lucideUsersRound,
    }),
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  readonly events = signal<EventListing[]>([]);
  readonly categories = signal<{ name: string; count: number }[]>([]);
  readonly savedIds = signal<Set<string>>(new Set());
  readonly upcomingFilter = signal<'Today' | 'This Weekend' | 'This Month'>('This Weekend');
  readonly upcomingFilters: ReadonlyArray<'Today' | 'This Weekend' | 'This Month'> = ['Today', 'This Weekend', 'This Month'];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => this.events.set(res.events));
    this.eventsService.getCategories().subscribe(categories => this.categories.set(categories));
  }

  get featured(): EventListing[] {
    return this.events().filter(e => e.featured);
  }

  findEvent(id: string): EventListing | undefined {
    return this.events().find(e => e.id === id);
  }

  categoryIcon(name: string): string {
    return CATEGORY_ICONS[name] ?? 'lucideMusic';
  }

  toggleSave(id: string): void {
    this.savedIds.update(current => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  formatPrice(amount: number): string {
    return formatKes(amount);
  }
}
