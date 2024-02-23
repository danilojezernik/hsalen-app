import {Component, inject, OnInit} from '@angular/core';
import {EventsService} from "../../../services/api/events.service";
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any;
  _logService = inject(SendLogService)

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

  events$ = this.api.getAllEvents().pipe(
    tap(() => console.log('Dela')),
    map((data) => {
      return data
    })
  )

  loadAllEvents() {
    this.spinner = true;
    this.api.getAllEvents().subscribe(data => {
        this.spinner = false;
        this.events = data;

        this._logService.sendPublicLog(`Events were checked by Client`, 'PUBLIC');
        this.heroData.path = this.router.url.slice(1);
      }, error => {
        console.error(error);
        this.spinner = false
        this._logService.sendPublicLog(`Error loading Events: ` + error.message, 'PUBLIC');
      }
    )
  }


}
