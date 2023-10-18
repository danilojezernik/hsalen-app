import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any;

  heroData = {
    naslov: 'Dogodki',
    path: ''
  }

  spinner: boolean = false;

  constructor(
    private api: EventsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadAllEvents()
  }

  loadAllEvents() {
    this.spinner = true;
    this.api.getAllEvents().subscribe(data => {
        this.spinner = false;
        this.events = data;

        this.heroData.path = this.router.url.slice(1);
      }, error => {
        console.error(error);
        this.spinner = false
      }
    )
  }


}
