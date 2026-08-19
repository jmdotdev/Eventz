import { Component, signal } from '@angular/core';
import { EventItem } from '../../../interfaces/interface';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsisVertical } from '@ng-icons/lucide';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { SearchFilterBarComponent } from '../search-filter-bar/search-filter-bar.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { hashGradient } from '../../../utils/gradient';

@Component({
    selector: 'app-events-table',
    standalone: true,
    imports: [NgIcon, StatusBadgeComponent, SearchFilterBarComponent, PaginationComponent],
    viewProviders: [provideIcons({ lucideEllipsisVertical })],
    templateUrl: './events-table.component.html',
})
export class EventsTableComponent {
  pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  search = '';
  readonly statusFilters = ['All', 'Published', 'Draft'];
  activeFilter = signal('All');

  readonly gradientFor = hashGradient;

  events: EventItem[] = Array.from({ length: 37 }).map((_, i) => ({
    name: `Event ${i + 1}`,
    location: ['Nairobi', 'Mombasa', 'Kisumu'][i % 3],
    organizedBy: ['Google', 'Microsoft', 'Local Org'][i % 3],
    verified: i % 2 === 0,
    date: new Date(2025, 0, i + 1).toDateString()
  }));

  get filteredEvents(): EventItem[] {
    return this.events.filter(e => {
      const matchesFilter = this.activeFilter() === 'All' || (this.activeFilter() === 'Published') === e.verified;
      const matchesSearch = !this.search || e.name.toLowerCase().includes(this.search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredEvents.length / this.pageSize));
  }

  get paginatedEvents(): EventItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredEvents.slice(start, start + this.pageSize);
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
    this.currentPage = 1;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.openMenuIndex = null;
    }
  }

  toggleMenu(index: number) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }
}
