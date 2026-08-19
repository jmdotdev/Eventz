import { Component, computed, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input({ required: true }) currentPage = 1;
  @Input({ required: true }) totalPages = 1;
  @Input({ required: true }) pageSize = 10;
  @Input({ required: true }) totalItems = 0;
  @Output() pageChange = new EventEmitter<number>();

  get rangeLabel(): string {
    const shown = Math.min(this.pageSize, this.totalItems - (this.currentPage - 1) * this.pageSize);
    return `Showing ${shown} of ${this.totalItems}`;
  }
}
