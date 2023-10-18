import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jasnovidnost',
  templateUrl: './jasnovidnost.component.html'
})
export class JasnovidnostComponent implements OnInit {

  jasnovidnost: any;

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

      this.heroData.naslov = this.jasnovidnost.naslov
      this.heroData.path = this.router.url.slice(1);
    })
  }

}
