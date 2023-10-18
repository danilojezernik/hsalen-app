import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-samohipnoza',
  templateUrl: './samohipnoza.component.html'
})
export class SamohipnozaComponent implements OnInit {


  samohipnoza: any;

  heroData = {
    naslov: 'Jasnovidnost',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/samohipnoza.json'
    this.db.get(path).subscribe(data => {
      this.samohipnoza = data;

      this.heroData.naslov = this.samohipnoza.naslov
      this.heroData.path = this.router.url.slice(1);

    })
  }


}
