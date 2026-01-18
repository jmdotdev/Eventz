import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faEllipsisV, faTimes, faPlus, faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Ticket, User } from '../../../interfaces/interface';

@Component({
  selector: 'app-ticket-list-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './ticket-list-table.component.html',
  styleUrl: './ticket-list-table.component.scss'
})
export class TicketListTableComponent {
  pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  faElipsis = faEllipsisV;
  faCheck = faCheck;
  faTimes = faTimes;
  faPlus = faPlus;
  faSearch = faSearch;
  faEllipsisH = faEllipsisH;
  showHeaderDropDown: boolean = false;

  tickets: Ticket[] = Array.from({ length: 37 }).map((_, i) => ({
    ticketNo: `#Ticket ${i + 1}`,
    event: ['NY Exhibition', 'LA Event', 'MIAMI Event'][i % 3],
    persons: i % 2 === 0 ? 1 : 2,
    active: i % 3 !== 0,
    dateBooked: new Date(2025, 0, i + 1).toDateString()
  }));

  get totalPages(): number {
    return Math.ceil(this.tickets.length / this.pageSize);
  }

  get paginatedTickets(): Ticket[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.tickets.slice(start, start + this.pageSize);
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

  openHeaderDropDown () {
    this.showHeaderDropDown = !this.showHeaderDropDown;
  }
}
