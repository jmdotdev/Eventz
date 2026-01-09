import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faArchive, faSignal, faWrench } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {
  @Input() index!: number;
  faUser = faUser;
  faArchive = faArchive;
  faSignal = faSignal;
  faWrench = faWrench;


  getBackgroundColor(index:number) {
    switch(index) {
      case 0 : return '#E7EDFF';
      case 1 : return '#FFF5D9';
      case 2 : return '#FFE0EB';
      case 3 : return '#DCFAF8';
      default: return '#381DDB'
    }
  }
}
