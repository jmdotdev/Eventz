import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';

@Component({
  selector: 'app-admin-search-filter-bar',
  standalone: true,
  imports: [FormsModule, NgIcon],
  viewProviders: [provideIcons({ lucideSearch })],
  templateUrl: './search-filter-bar.component.html',
})
export class SearchFilterBarComponent {
  @Input() placeholder = 'Search…';
  @Input() searchValue = '';
  @Output() searchValueChange = new EventEmitter<string>();

  @Input() filters: string[] = [];
  @Input() activeFilter = '';
  @Output() activeFilterChange = new EventEmitter<string>();
}
