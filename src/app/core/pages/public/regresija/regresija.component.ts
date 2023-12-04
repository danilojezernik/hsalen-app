import {Component, inject, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-regresija',
  templateUrl: './regresija.component.html'
})
export class RegresijaComponent implements OnInit {

  regresija: any;
  _logService = inject(SendLogService)

  heroData = {
    naslov: '',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/regresija.json'

    this._logService.sendPublicLog(`Regresija is checked by Client`, 'PUBLIC');

    this.db.get(path).subscribe(data => {
      this.regresija = data;

      this.heroData.naslov = this.regresija.naslov
      this.heroData.path = this.router.url.slice(1);
    }, error => {
      this._logService.sendPublicLog(`Error: Loading Regresija: ` + error.message, 'PUBLIC');
    })
  }


}
