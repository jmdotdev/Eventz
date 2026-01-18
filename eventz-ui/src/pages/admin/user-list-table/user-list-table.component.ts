import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faEllipsisV, faTimes, faPlus, faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../../interfaces/interface';

@Component({
  selector: 'app-user-list-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './user-list-table.component.html',
  styleUrl: './user-list-table.component.scss'
})
export class UserListTableComponent {
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

  users: User[] = Array.from({ length: 37 }).map((_, i) => ({
    name: `User ${i + 1}`,
    email: ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'][i % 3],
    active: i % 2 === 0,
    date: new Date(2025, 0, i + 1).toDateString()
  }));

  get totalPages(): number {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get paginatedUsers(): User[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
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
