import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
    faElipsisH = faEllipsisH;
    faPlus = faPlus;
    faSearch = faSearch;
}
