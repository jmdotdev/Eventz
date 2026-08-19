import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsisVertical, lucidePlus } from '@ng-icons/lucide';
import { Ticket } from '../../../interfaces/interface';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatusBadgeComponent } from '../../../components/admin/status-badge/status-badge.component';
import { SearchFilterBarComponent } from '../../../components/admin/search-filter-bar/search-filter-bar.component';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';

@Component({
    selector: 'app-ticket-list-table',
    standalone: true,
    imports: [NgIcon, PageHeaderComponent, StatusBadgeComponent, SearchFilterBarComponent, PaginationComponent],
    viewProviders: [provideIcons({ lucideEllipsisVertical, lucidePlus })],
    templateUrl: './ticket-list-table.component.html',
})
export class TicketListTableComponent {
  pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  search = '';
  readonly statusFilters = ['All', 'Active', 'Cancelled'];
  activeFilter = signal('All');

  constructor (private router: Router) {}

  tickets: Ticket[] = Array.from({ length: 37 }).map((_, i) => ({
    ticketNo: `#Ticket ${i + 1}`,
    event: ['NY Exhibition', 'LA Event', 'MIAMI Event'][i % 3],
    persons: i % 2 === 0 ? 1 : 2,
    active: i % 3 !== 0,
    dateBooked: new Date(2025, 0, i + 1).toDateString()
  }));

  get filteredTickets(): Ticket[] {
    return this.tickets.filter(t => {
      const matchesFilter = this.activeFilter() === 'All' || (this.activeFilter() === 'Active') === t.active;
      const matchesSearch = !this.search || t.ticketNo.toLowerCase().includes(this.search.toLowerCase()) || t.event.toLowerCase().includes(this.search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredTickets.length / this.pageSize));
  }

  get paginatedTickets(): Ticket[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredTickets.slice(start, start + this.pageSize);
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

  navigateToCreateTicket () {
    this.router.navigate(['admin/create-ticket']);
  }
}
