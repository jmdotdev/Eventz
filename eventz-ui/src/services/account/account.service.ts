import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountStats, EventListing, RecentlyViewedItem } from '../../interfaces/event.interface';
import { MOCK_EVENTS } from '../events/events.mock';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  getStats(): Observable<AccountStats> {
    return of({ attended: 12, upcoming: 3, saved: 8 });
  }

  getRecommended(): Observable<EventListing[]> {
    return of(MOCK_EVENTS.filter(e => ['afrofuture-live', 'food-culture-festival', 'creative-workshop'].includes(e.id)));
  }

  getSaved(): Observable<EventListing[]> {
    return of(MOCK_EVENTS.filter(e => ['nairobi-music-festival-2026', 'nairobi-tech-summit-2026', 'basketball-tournament'].includes(e.id)));
  }

  getRecentlyViewed(): Observable<RecentlyViewedItem[]> {
    return of([
      { event: MOCK_EVENTS.find(e => e.id === 'basketball-tournament')! },
      { event: MOCK_EVENTS.find(e => e.id === 'startup-networking-night')! },
      { event: MOCK_EVENTS.find(e => e.id === 'comedy-night')!, statusNote: 'Sold out' },
    ]);
  }
}
