import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyTicket } from '../../interfaces/event.interface';
import { MOCK_TICKETS } from './tickets.mock';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  getTickets(): Observable<MyTicket[]> {
    return of(MOCK_TICKETS);
  }
}
