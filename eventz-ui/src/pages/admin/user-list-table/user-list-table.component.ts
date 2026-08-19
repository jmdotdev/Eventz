import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideEllipsisVertical, lucidePlus } from '@ng-icons/lucide';
import { User } from '../../../interfaces/interface';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatusBadgeComponent } from '../../../components/admin/status-badge/status-badge.component';
import { SearchFilterBarComponent } from '../../../components/admin/search-filter-bar/search-filter-bar.component';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';

@Component({
    selector: 'app-user-list-table',
    standalone: true,
    imports: [NgIcon, PageHeaderComponent, StatusBadgeComponent, SearchFilterBarComponent, PaginationComponent],
    viewProviders: [provideIcons({ lucideEllipsisVertical, lucidePlus })],
    templateUrl: './user-list-table.component.html',
})
export class UserListTableComponent {
  pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  search = '';
  readonly statusFilters = ['All', 'Active', 'Inactive'];
  activeFilter = signal('All');

  users: User[] = Array.from({ length: 37 }).map((_, i) => ({
    name: `User ${i + 1}`,
    email: ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'][i % 3],
    active: i % 2 === 0,
    date: new Date(2025, 0, i + 1).toDateString()
  }));

  get filteredUsers(): User[] {
    return this.users.filter(u => {
      const matchesFilter = this.activeFilter() === 'All' || (this.activeFilter() === 'Active') === u.active;
      const matchesSearch = !this.search || u.name.toLowerCase().includes(this.search.toLowerCase()) || u.email.toLowerCase().includes(this.search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredUsers.length / this.pageSize));
  }

  get paginatedUsers(): User[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
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
