import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any;

  constructor(private api: EventsService) {
  }

  ngOnInit() {
    this.loadAllEvents()
  }

  loadAllEvents() {
    this.api.getAllEvents().subscribe(data => {
      this.events = data
    })
  }


}
