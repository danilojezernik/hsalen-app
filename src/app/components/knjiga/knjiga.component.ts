import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Knjiga} from "../../data/knjiga/knjiga";
import {KnjigaService} from "../../services/knjiga/knjiga.service";
import {Subject} from "rxjs";
import {trace} from "../../utils/trace";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-knjiga',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  knjiga: Knjiga[] = [];

  constructor(
    private knjigaService: KnjigaService,
  ) {
  }

  @trace()
  ngOnInit() {
    this.knjigaService.getKnjiga()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.knjiga = data;
      })
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete()
  }

}
