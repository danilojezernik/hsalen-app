import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";
import {LogsService} from "../../../services/api/logs.service";

@Component({
  selector: 'app-hipnoterapija',
  templateUrl: './hipnoterapija.component.html'
})
export class HipnoterapijaComponent implements OnInit {

  hipnoterapija: any;
  _logService = inject(SendLogService)
  _logBackendService = inject(LogsService)

  heroData = {
    naslov: 'Hipnoterapija',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const path: string = 'assets/hipnoterapija.json'
    this.db.get(path).subscribe((response) => {
      this.hipnoterapija = response;
      this._logService.sendPublicLog(`Hipnoterapija is checked by Client`, 'PUBLIC');
      this.heroData.path = this.router.url.slice(1);
    }, error => {
      this._logService.sendPublicLog(`Error: Loading Hipnoterapija: ` + error.message, 'PUBLIC');
    })
    this.getBackendLog()

  }

  getBackendLog() {
    this._logBackendService.getBackendLogAdmin('hipnoterapija').subscribe()
  }

}
