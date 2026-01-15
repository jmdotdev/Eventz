import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsTableComponent } from "../../../components/admin/events-table/events-table.component";

@Component({
  selector: 'app-admin-events-list',
  standalone: true,
  imports: [CommonModule, EventsTableComponent],
  templateUrl: './admin-events-list.component.html',
  styleUrl: './admin-events-list.component.scss'
})
export class AdminEventsListComponent {

}
