import {Component, OnInit, OnDestroy} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {Samohipnoza} from "../../../models/samohipnoza";

@Component({
  selector: 'app-samohipnoza',
  templateUrl: './samohipnoza.component.html'
})
export class SamohipnozaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  samohipnoza: Samohipnoza[] = [];

  constructor() {
  }

  @trace()
  ngOnInit() {
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
