import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventsService} from "../../../services/api/events.service";
import {SendLogService} from "../../../services/api/send-log.service";
import {LogsService} from "../../../services/api/logs.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  index: any;
  events: any;
  _logService = inject(SendLogService)
  _logBackendService = inject(LogsService)

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
    this.getBackendLog()
  }

  getEventNotification() {
    this.api.getAllEvents().subscribe(data => {
      this.events = data;
    }, error => {
      this._logService.sendPublicLog(`Error: Loading Event Notification: ` + error.message, 'PUBLIC');
    })
  }

  getBackendLog() {
    this._logBackendService.getBackendLogAdmin('index').subscribe()
  }


}
