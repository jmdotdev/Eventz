import { Component } from '@angular/core';
import { Organizer } from '../../../interfaces/interface';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsisVertical } from '@ng-icons/lucide';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { SearchFilterBarComponent } from '../search-filter-bar/search-filter-bar.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
    selector: 'app-organizers-table',
    standalone: true,
    imports: [NgIcon, StatusBadgeComponent, SearchFilterBarComponent, PaginationComponent],
    viewProviders: [provideIcons({ lucideEllipsisVertical })],
    templateUrl: './organizers-table.component.html',
})
export class OrganizersTableComponent {
  pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  search = '';

  organizers: Organizer[] = Array.from({ length: 37 }).map((_, i) => ({
    name: `Organizer ${i + 1}`,
    email: ['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com'][i % 3],
    verified: i % 2 === 0,
    date: new Date(2025, 0, i + 1).toDateString()
  }));

  get filteredOrganizers(): Organizer[] {
    return this.organizers.filter(o => !this.search || o.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredOrganizers.length / this.pageSize));
  }

  get paginatedOrganizers(): Organizer[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOrganizers.slice(start, start + this.pageSize);
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
