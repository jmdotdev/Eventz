import { Component } from '@angular/core';
import { CommonModule } from  '@angular/common'
import { DashboardCardComponent } from "../../../components/admin/dashboard-card/dashboard-card.component";
import { UpcomingEventCardComponent } from "../../../components/admin/upcoming-event-card/upcoming-event-card.component";
import { PieChartComponent } from "../../../components/admin/pie-chart/pie-chart.component";
import { BarChartComponent } from "../../../components/bar-chart/bar-chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardCardComponent, CommonModule, UpcomingEventCardComponent, PieChartComponent, BarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   count: number[] = [1,2,3,4];
}
