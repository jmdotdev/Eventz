import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  pieChartOptions: ChartConfiguration<'pie'>['options'] = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' // 'top' | 'left' | 'right' | 'bottom'
    }
  },
  maintainAspectRatio: false
};

  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Chrome', 'Firefox', 'Safari', 'Edge'],
    datasets: [
      {
        data: [55, 20, 15, 10]
      }
    ]
  };

}
