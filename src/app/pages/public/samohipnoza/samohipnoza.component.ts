import {Component, OnInit, OnDestroy} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Samohipnoza} from "../../../data/samohipnoza/samohipnoza";
import {PublicGetDataService} from "../../../services/permanent/public-get-data.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-samohipnoza',
  templateUrl: './samohipnoza.component.html',
  styleUrls: ['./samohipnoza.component.css']
})
export class SamohipnozaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  samohipnoza: Samohipnoza[] = []

  constructor(
    private publicService: PublicGetDataService
  ) {
  }

  @trace()
  ngOnInit() {
    this.publicService.getSamohipnoza()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.samohipnoza = data;
      })
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
