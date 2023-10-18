import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medijstvo',
  templateUrl: './medijstvo.component.html'
})
export class MedijstvoComponent implements OnInit {

  medijstvo: any;

  heroData = {
    naslov: '',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const path: string = 'assets/medijstvo.json'
    this.db.get(path).subscribe(response => {
      this.medijstvo = response;

      this.heroData.naslov = this.medijstvo.naslov
      this.heroData.path = this.router.url.slice(1);
    })
  }

}
