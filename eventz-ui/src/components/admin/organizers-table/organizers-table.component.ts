import { Component } from '@angular/core';
import { EventItem, Organizer } from '../../../interfaces/interface';
import  { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-organizers-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './organizers-table.component.html',
  styleUrl: './organizers-table.component.scss'
})
export class OrganizersTableComponent {
 pageSize = 10;
  currentPage = 1;
  openMenuIndex: number | null = null;
  faElipsis = faEllipsisV;
  faCheck = faCheck;
  faTimes = faTimes;

  organizers: Organizer[] = Array.from({ length: 37 }).map((_, i) => ({
    name: `Organizer ${i + 1}`,
    email: ['test@gmail.com', 'test2@gmail.com', 'test3@gmail.com'][i % 3],
    verified: i % 2 === 0,
    date: new Date(2025, 0, i + 1).toDateString()
  }));

  get totalPages(): number {
    return Math.ceil(this.organizers.length / this.pageSize);
  }

  get paginatedOrganizers(): Organizer[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.organizers.slice(start, start + this.pageSize);
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
