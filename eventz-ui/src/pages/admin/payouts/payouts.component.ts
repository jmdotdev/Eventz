import { Component, OnInit, signal } from '@angular/core';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatusBadgeComponent } from '../../../components/admin/status-badge/status-badge.component';
import { PaginationComponent } from '../../../components/admin/pagination/pagination.component';
import { AdminService, PayoutRow } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-payouts',
  standalone: true,
  imports: [PageHeaderComponent, StatusBadgeComponent, PaginationComponent],
  templateUrl: './payouts.component.html',
})
export class PayoutsComponent implements OnInit {
  pageSize = 10;
  currentPage = 1;

  summary = signal<{ amount: string; date: string; gross: string; fee: string; refunds: string } | null>(null);
  history = signal<PayoutRow[]>([]);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getPayoutSummary().subscribe(summary => this.summary.set(summary));
    this.adminService.getPayoutHistory().subscribe(rows => this.history.set(rows));
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.history().length / this.pageSize));
  }

  get paginatedHistory(): PayoutRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.history().slice(start, start + this.pageSize);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }
}
