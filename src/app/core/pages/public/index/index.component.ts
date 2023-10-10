import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  index: any;

  heroData = {
    naslov: '',
    podnaslov: ''
  }

  constructor(private db: HttpClient) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/index.json'
    this.db.get(path).subscribe((response) => {
        this.index = response

        this.heroData = {
          naslov: this.index.naslov,
          podnaslov: this.index.podnaslov,
        }
      }
    )
  }

}
