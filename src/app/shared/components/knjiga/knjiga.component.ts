import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'knjiga',
  templateUrl: './knjiga.component.html'
})
export class KnjigaComponent implements OnInit {

  knjiga: any;

  constructor(private db: HttpClient) {
  }

  ngOnInit() {
    const path: string = 'assets/knjiga.json'
    this.db.get(path).subscribe(response => {
      this.knjiga = response
    })
  }

}
