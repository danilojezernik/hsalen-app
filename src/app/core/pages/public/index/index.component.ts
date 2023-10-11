import {Component, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";
import {EventsService} from "../../../services/api/events.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  index: any;
  events: any;

  heroData = {
    naslov: '',
    podnaslov: ''
  }

  constructor(
    private db: HttpClient,
    private api: EventsService
  ) {
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
    
    this.getEventNotification()
  }

  getEventNotification() {
    this.api.getAllEvents().subscribe(data => {
      this.events = data;
    })
  }


}
