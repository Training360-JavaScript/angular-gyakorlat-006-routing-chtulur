import { EventService } from 'src/app/service/event.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  eventList: Observable<any>;

  constructor(private eService: EventService) {
    this.eventList = this.eService.getAll();
  }

  ngOnInit(): void {}
}
