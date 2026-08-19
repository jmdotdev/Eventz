import { Component, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';
import { StatusBadgeComponent } from '../../../components/admin/status-badge/status-badge.component';
import { AdminService, TeamMember } from '../../../services/admin/admin.service';

interface NotificationPref {
  label: string;
  description: string;
  enabled: boolean;
}

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [PageHeaderComponent, StatusBadgeComponent, NgIcon],
  viewProviders: [provideIcons({ lucidePlus })],
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  team = signal<TeamMember[]>([]);

  notifications = signal<NotificationPref[]>([
    { label: 'New orders', description: 'Get notified when a ticket is purchased.', enabled: true },
    { label: 'Low ticket stock', description: 'Alert when a ticket tier drops below 10% remaining.', enabled: true },
    { label: 'Weekly payout summary', description: 'A recap of revenue and payouts every Friday.', enabled: true },
    { label: 'Marketing tips', description: 'Occasional product updates and organizer tips.', enabled: false },
  ]);

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getTeamMembers().subscribe(team => this.team.set(team));
  }

  toggleNotification(pref: NotificationPref): void {
    this.notifications.update(list => list.map(n => (n === pref ? { ...n, enabled: !n.enabled } : n)));
  }
}
