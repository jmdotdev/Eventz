import { Component } from '@angular/core';
import { CommonModule } from  '@angular/common'
import { DashboardCardComponent } from "../../../components/admin/dashboard-card/dashboard-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardCardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   count: number[] = [1,2,3,4];
}
