import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-regresija',
  templateUrl: './regresija.component.html'
})
export class RegresijaComponent implements OnInit {

  regresija: any;

  constructor(private db: HttpClient) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/regresija.json'
    this.db.get(path).subscribe(data => {
      this.regresija = data;
    })
  }


}
