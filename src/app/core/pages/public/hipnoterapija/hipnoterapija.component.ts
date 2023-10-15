import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hipnoterapija',
  templateUrl: './hipnoterapija.component.html'
})
export class HipnoterapijaComponent implements OnInit {

  hipnoterapija: any;

  heroData = {
    naslov: 'Hipnoterapija',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/hipnoterapija.json'
    this.db.get(path).subscribe((response) => {
      this.hipnoterapija = response;

      this.heroData.path = this.router.url.slice(1);

    })
  }

}
