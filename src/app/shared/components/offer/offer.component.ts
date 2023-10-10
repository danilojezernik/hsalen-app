import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent implements OnInit {

  offer: any;

  constructor(private db: HttpClient) {
  }

  ngOnInit() {
    const path: string = 'assets/offer.json'
    this.db.get(path).subscribe(response => {
      this.offer = response;
    })
  }

}
