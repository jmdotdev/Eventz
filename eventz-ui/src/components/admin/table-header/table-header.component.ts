import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from "../../../../node_modules/@angular/common/index";
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
    faElipsisH = faEllipsisH;
    faPlus = faPlus;
    faSearch = faSearch;
    showEventsTable: boolean = true;
    @Output() showEvents = new EventEmitter<boolean>(true);

    constructor ( private router: Router) {}

    toggleShowEvents (value: boolean) {
       this.showEvents.emit(value)
       this.showEventsTable = value;
    }
    navigateToAddEvent () {
      this.router.navigate(['/admin/create-event']);
    }
}
