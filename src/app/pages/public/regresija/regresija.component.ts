import {Component, OnDestroy, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {PublicGetDataService} from "../../../services/permanent/public-get-data.service";
import {takeUntil} from "rxjs/operators";
import {Regresija} from "../../../data/regresija/regresija";

@Component({
  selector: 'app-regresija',
  templateUrl: './regresija.component.html',
  styleUrls: ['./regresija.component.css']
})
export class RegresijaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>()

  regresija: Regresija[] = []

  constructor(
    private publicService: PublicGetDataService
  ) {
  }

  @trace()
  ngOnInit() {
    this.publicService.getRegresija()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.regresija = data;
      })
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }

}
