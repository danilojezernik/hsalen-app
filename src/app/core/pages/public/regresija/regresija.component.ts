import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-regresija',
  templateUrl: './regresija.component.html'
})
export class RegresijaComponent implements OnInit {

  regresija: any;

  heroData = {
    naslov: '',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/regresija.json'
    this.db.get(path).subscribe(data => {
      this.regresija = data;

      this.heroData.naslov = this.regresija.naslov
      this.heroData.path = this.router.url.slice(1);
    })
  }


}
