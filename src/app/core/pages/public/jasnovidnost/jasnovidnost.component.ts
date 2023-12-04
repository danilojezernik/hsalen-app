import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SendLogService} from "../../../services/api/send-log.service";

@Component({
  selector: 'app-jasnovidnost',
  templateUrl: './jasnovidnost.component.html'
})
export class JasnovidnostComponent implements OnInit {

  jasnovidnost: any;
  _logService = inject(SendLogService)

  heroData = {
    naslov: '',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const path: string = 'assets/jasnovidnost.json'
    this.db.get(path).subscribe(response => {
      this.jasnovidnost = response;
      this._logService.sendPublicLog(`Jasnovidnost is checked by Client`, 'PUBLIC');
      this.heroData.naslov = this.jasnovidnost.naslov
      this.heroData.path = this.router.url.slice(1);
    }, error => {
      this._logService.sendPublicLog(`Error: Loading Jasnovidnost: ` + error.message, 'PUBLIC');
    })
  }

}
