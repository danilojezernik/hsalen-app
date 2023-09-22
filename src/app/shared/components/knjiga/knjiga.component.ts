import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../core/utils/trace";

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html'
})
export class KnjigaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();


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
