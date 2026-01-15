import { Component } from '@angular/core';
import { EventItem } from '../../../interfaces/interface';
import  { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TableHeaderComponent } from "../table-header/table-header.component";


@Component({
  selector: 'app-events-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TableHeaderComponent],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.scss'
})
export class EventsTableComponent {
  pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  faElipsis = faEllipsisV;
  faCheck = faCheck;
  faTimes = faTimes;

  events: EventItem[] = Array.from({ length: 37 }).map((_, i) => ({
    name: `Event ${i + 1}`,
    location: ['Nairobi', 'Mombasa', 'Kisumu'][i % 3],
    organizedBy: ['Google', 'Microsoft', 'Local Org'][i % 3],
    verified: i % 2 === 0,
    date: new Date(2025, 0, i + 1).toDateString()
  }));

  get totalPages(): number {
    return Math.ceil(this.events.length / this.pageSize);
  }

  get paginatedEvents(): EventItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.events.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.openMenuIndex = null;
    }
  }

  toggleMenu(index: number) {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }
}
