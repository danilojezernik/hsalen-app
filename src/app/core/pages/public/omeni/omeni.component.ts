import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedijiService} from "../../../services/api/mediji.service";
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";

@Component({
  selector: 'app-omeni',
  templateUrl: './omeni.component.html'
})
export class OmeniComponent implements OnInit, OnDestroy {

  omeni: any;
  mediji: any;

  heroData = {
    naslov: 'O meni',
    path: 'O meni'
  }

  // Subject for component destruction
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private db: HttpClient,
    private api: MedijiService
  ) {
  }

  ngOnInit() {
    const path: string = 'assets/jaz.json'
    this.db.get(path).subscribe(response => {
      this.omeni = response
    })
    this.loadAllMedij()
  }

  loadAllMedij() {
    this.api.getAllMediji().subscribe(data => {
      this.mediji = data
    })
  }

  @trace()
  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
