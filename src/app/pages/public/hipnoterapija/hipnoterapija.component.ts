import {Component, OnDestroy, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {Hipnoterapija} from "../../../data/hipnoterapija/hipnoterapija";
import {PublicGetDataService} from "../../../services/permanent/public-get-data.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-hipnoterapija',
  templateUrl: './hipnoterapija.component.html',
  styleUrls: ['./hipnoterapija.component.css']
})
export class HipnoterapijaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  hipnoterapija: Hipnoterapija[] = []

  constructor(private publicService: PublicGetDataService) {
  }

  @trace()
  ngOnInit() {
    this.publicService.getHipnoterapija()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.hipnoterapija = data;
      })
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
