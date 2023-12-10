import {Component, inject, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";
import {LogsService} from "../../../services/api/logs.service";

@Component({
  selector: 'app-samohipnoza',
  templateUrl: './samohipnoza.component.html'
})
export class SamohipnozaComponent implements OnInit {

  samohipnoza: any;
  _logService = inject(SendLogService)
  _logBackendService = inject(LogsService)

  heroData = {
    naslov: 'Jasnovidnost',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/samohipnoza.json'
    this.db.get(path).subscribe(data => {
      this.samohipnoza = data;
      this._logService.sendPublicLog(`Samohipnoza is checked by Client`, 'PUBLIC');
      this.heroData.naslov = this.samohipnoza.naslov
      this.heroData.path = this.router.url.slice(1);
    }, error => {
      this._logService.sendPublicLog(`Error: Loading Samohipnoza: ` + error.message, 'PUBLIC');
    })
    this.getBackendLog()
  }

  getBackendLog() {
    this._logBackendService.getBackendLogAdmin('samohipnoza').subscribe()
  }

}
