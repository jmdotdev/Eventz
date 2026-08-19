import { Component, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatCardComponent } from '../../../components/admin/stat-card/stat-card.component';
import { SearchFilterBarComponent } from '../../../components/admin/search-filter-bar/search-filter-bar.component';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';
import { AdminService, AdminStat, AttendeeRow } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-attendees',
  standalone: true,
  imports: [NgIcon, PageHeaderComponent, StatCardComponent, SearchFilterBarComponent, PaginationComponent],
  viewProviders: [provideIcons({ lucideCheck })],
  templateUrl: './attendees.component.html',
})
export class AttendeesComponent implements OnInit {
  pageSize = 10;
  currentPage = 1;
  search = '';
  readonly statusFilters = ['All', 'Checked in', 'Not checked in'];
  activeFilter = signal('All');

  stats = signal<AdminStat[]>([]);
  attendees = signal<AttendeeRow[]>([]);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAttendeeStats().subscribe(stats => this.stats.set(stats));
    this.adminService.getAttendees().subscribe(rows => this.attendees.set(rows));
  }

  get filteredAttendees(): AttendeeRow[] {
    return this.attendees().filter(a => {
      const matchesFilter =
        this.activeFilter() === 'All' ||
        (this.activeFilter() === 'Checked in') === a.checkedIn;
      const q = this.search.toLowerCase();
      const matchesSearch = !q || a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredAttendees.length / this.pageSize));
  }

  get paginatedAttendees(): AttendeeRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredAttendees.slice(start, start + this.pageSize);
  }

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
    this.currentPage = 1;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }
}
