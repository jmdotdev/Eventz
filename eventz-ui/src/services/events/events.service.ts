import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from '../../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient ) {}

  getEvents (): Observable<{ events: IEvent[]}> {
    return this.http.get<{ events: IEvent[]}>('https://dc8a87b2-5653-4889-971a-ca76c441ba95.mock.pstmn.io/events')
  }
}
