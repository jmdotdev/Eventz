import { Component, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload } from '@ng-icons/lucide';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatusBadgeComponent } from '../../../components/admin/status-badge/status-badge.component';
import { SearchFilterBarComponent } from '../../../components/admin/search-filter-bar/search-filter-bar.component';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';
import { AlertBannerComponent } from '../../../components/alert-banner/alert-banner.component';
import { AdminService, OrderRow } from '../../../services/admin/admin.service';
import { formatKes } from '../../../utils/format';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [NgIcon, PageHeaderComponent, StatusBadgeComponent, SearchFilterBarComponent, PaginationComponent, AlertBannerComponent],
  viewProviders: [provideIcons({ lucideDownload })],
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {
  pageSize = 10;
  currentPage = 1;
  search = '';
  readonly statusFilters = ['All', 'Paid', 'Pending', 'Refunded', 'Failed'];
  activeFilter = signal('All');
  readonly formatPrice = formatKes;

  orders = signal<OrderRow[]>([]);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getOrders().subscribe(rows => this.orders.set(rows));
  }

  get needsAttentionCount(): number {
    return this.orders().filter(o => o.status === 'Pending' || o.status === 'Failed').length;
  }

  get filteredOrders(): OrderRow[] {
    return this.orders().filter(o => {
      const matchesFilter = this.activeFilter() === 'All' || o.status === this.activeFilter();
      const q = this.search.toLowerCase();
      const matchesSearch = !q || o.id.toLowerCase().includes(q) || o.buyer.toLowerCase().includes(q) || o.phone.includes(q);
      return matchesFilter && matchesSearch;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredOrders.length / this.pageSize));
  }

  get paginatedOrders(): OrderRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOrders.slice(start, start + this.pageSize);
  }

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
    this.currentPage = 1;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  actionLabel(status: OrderRow['status']): string {
    if (status === 'Pending') return 'Retry push';
    if (status === 'Refunded' || status === 'Failed') return 'Contact';
    return 'View';
  }
}
