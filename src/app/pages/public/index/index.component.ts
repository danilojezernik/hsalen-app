import {Component, OnInit, OnDestroy} from '@angular/core';
import {PublicGetDataService} from "../../../services/permanent/public-get-data.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {Index} from "../../../data/index";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],

})
export class IndexComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  index: Index[] = []

  constructor(
    private publicService: PublicGetDataService
  ) {
  }

  @trace()
  ngOnInit() {
    this.publicService.getIndex()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.index = data;
      })
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
