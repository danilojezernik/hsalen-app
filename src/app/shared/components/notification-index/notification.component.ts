import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../core/services/api/events.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

  events: any;

  constructor(public api: EventsService) {
  }

  ngOnInit() {
    this.api.getAllEvents().subscribe(data => {
      this.events = data;
    })
  }

}
