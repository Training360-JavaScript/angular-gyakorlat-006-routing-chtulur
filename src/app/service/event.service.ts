import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Event } from '../model/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  eventUrl: string = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }
}
