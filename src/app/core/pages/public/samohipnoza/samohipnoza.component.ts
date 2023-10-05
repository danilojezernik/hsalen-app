import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-samohipnoza',
  templateUrl: './samohipnoza.component.html'
})
export class SamohipnozaComponent implements OnInit {


  samohipnoza: any;

  constructor(private db: HttpClient) {
  }

  @trace()
  ngOnInit() {
    const path: string = 'assets/samohipnoza.json'
    this.db.get(path).subscribe(data => {
      this.samohipnoza = data;
    })
  }


}
