import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventListing } from '../../interfaces/event.interface';
import { EVENT_CATEGORIES, MOCK_EVENTS } from './events.mock';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getEvents(): Observable<{ events: EventListing[] }> {
    return of({ events: MOCK_EVENTS });
  }

  getEventById(id: string): Observable<EventListing | undefined> {
    return of(MOCK_EVENTS.find(e => e.id === id));
  }

  getCategories(): Observable<{ name: string; count: number }[]> {
    return of(EVENT_CATEGORIES);
  }
}
