import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hipnoterapija',
  templateUrl: './hipnoterapija.component.html'
})
export class HipnoterapijaComponent implements OnInit {

  hipnoterapija: any;

  heroData = {
    naslov: '',
    podnaslov: ''
  }

  constructor(private db: HttpClient) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/hipnoterapija.json'
    this.db.get(path).subscribe((response) => {
      this.hipnoterapija = response;

      this.heroData = {
        naslov: this.hipnoterapija.naslov,
        podnaslov: this.hipnoterapija.podnaslov,
      }
    })
  }

}
