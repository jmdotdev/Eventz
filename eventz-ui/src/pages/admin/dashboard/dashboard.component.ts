import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideDownload, lucidePlus } from '@ng-icons/lucide';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatCardComponent } from '../../../components/admin/stat-card/stat-card.component';
import { RevenueChartComponent } from '../../../components/admin/revenue-chart/revenue-chart.component';
import { CapacityDonutComponent } from '../../../components/admin/capacity-donut/capacity-donut.component';
import { StatusBadgeComponent } from '../../../components/admin/status-badge/status-badge.component';
import { PeriodSelectorComponent } from '../../../components/admin/period-selector/period-selector.component';
import { ZardButtonComponent } from '../../../app/shared/components/button';
import {
  AdminService,
  AdminStat,
  CapacityLegendRow,
  UpcomingEventRow,
} from '../../../services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PageHeaderComponent,
    StatCardComponent,
    RevenueChartComponent,
    CapacityDonutComponent,
    StatusBadgeComponent,
    PeriodSelectorComponent,
    ZardButtonComponent,
    RouterLink,
    NgIcon,
  ],
  viewProviders: [provideIcons({ lucideDownload, lucidePlus })],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  readonly stats = signal<AdminStat[]>([]);
  readonly revenue = signal<{ data: number[]; labels: string[] }>({ data: [], labels: [] });
  readonly capacity = signal<{ percent: number; soldLabel: string; totalLabel: string; legend: CapacityLegendRow[] } | null>(null);
  readonly upcomingEvents = signal<UpcomingEventRow[]>([]);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getDashboardStats().subscribe(stats => this.stats.set(stats));
    this.adminService.getRevenueSeries().subscribe(series => this.revenue.set(series));
    this.adminService.getCapacityBreakdown().subscribe(breakdown => this.capacity.set(breakdown));
    this.adminService.getUpcomingEventsSummary().subscribe(rows => this.upcomingEvents.set(rows));
  }
}
