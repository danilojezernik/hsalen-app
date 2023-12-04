import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventsService} from "../../../services/api/events.service";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  index: any;
  events: any;
  _logService = inject(SendLogService)

  heroData = {
    naslov: '',
    podnaslov: ''
  }

  constructor(
    private db: HttpClient,
    private api: EventsService
  ) {
  }

  ngOnInit() {
    const path: string = 'assets/index.json'
    this.db.get(path).subscribe((response) => {
        this.index = response
        this._logService.sendPublicLog(`Index is checked by Client`, 'PUBLIC');
        this.heroData = {
          naslov: this.index.naslov,
          podnaslov: this.index.podnaslov,
        }
      }, error => {
        this._logService.sendPublicLog(`Error: Loading Index: ` + error.message, 'PUBLIC');
      }
    )
    this.getEventNotification()
  }

  getEventNotification() {
    this.api.getAllEvents().subscribe(data => {
      this.events = data;
      this._logService.sendPublicLog(`Event notification is initialized`, 'PUBLIC');
    }, error => {
      this._logService.sendPublicLog(`Error: Loading Event Notification: ` + error.message, 'PUBLIC');
    })
  }


}
