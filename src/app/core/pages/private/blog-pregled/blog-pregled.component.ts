import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-pregled',
  templateUrl: './blog-pregled.component.html',
})
export class BlogPregledComponent implements OnInit, OnDestroy {

  blog: any[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  @trace()
  ngOnInit(): void {
  }

  @trace()
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
