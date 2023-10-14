import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any;

  spinner: boolean = false;

  constructor(private api: EventsService) {
  }

  ngOnInit() {
    this.loadAllEvents()
  }

  loadAllEvents() {
    this.spinner = true;
    this.api.getAllEvents().subscribe(data => {
        this.spinner = false;
        this.events = data;
      }, error => {
        console.error(error);
        this.spinner = false
      }
    )
  }


}
