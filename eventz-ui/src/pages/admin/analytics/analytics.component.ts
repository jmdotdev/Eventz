import { Component, OnInit, signal } from '@angular/core';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatCardComponent } from '../../../components/admin/stat-card/stat-card.component';
import { PeriodSelectorComponent } from '../../../components/admin/period-selector/period-selector.component';
import { AdminService, AnalyticsData } from '../../../services/admin/admin.service';

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [PageHeaderComponent, StatCardComponent, PeriodSelectorComponent],
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {
  period = signal('3m');
  data = signal<AnalyticsData | null>(null);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAnalytics().subscribe(data => this.data.set(data));
  }
}
