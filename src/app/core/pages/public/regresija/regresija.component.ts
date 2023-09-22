import {Component, OnDestroy, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {Regresija} from "../../../models/regresija";

@Component({
  selector: 'app-regresija',
  templateUrl: './regresija.component.html'
})
export class RegresijaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>()

  regresija: Regresija[] = []

  constructor() {
  }

  @trace()
  ngOnInit() {
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }

}
