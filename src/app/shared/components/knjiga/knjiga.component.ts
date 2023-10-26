import {Component, OnInit} from '@angular/core';
import {trace} from "../../../core/utils/trace";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'knjiga',
  templateUrl: './knjiga.component.html'
})
export class KnjigaComponent implements OnInit {

  knjiga: any;


  constructor(private db: HttpClient) {
  }

  @trace()
  ngOnInit() {

    const path: string = 'assets/knjiga.json'
    this.db.get(path).subscribe(response => {
      this.knjiga = response
    })
  }


}
