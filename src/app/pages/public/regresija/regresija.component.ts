import {Component, OnDestroy, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {Regresija} from "../../../services/api/models/regresija";
import {RegresijaService} from "../../../services/api/services/regresija.service";
import {exe} from "../../../utils/exe";

@Component({
    selector: 'app-regresija',
    templateUrl: './regresija.component.html',
    styleUrls: ['./regresija.component.css']
})
export class RegresijaComponent implements OnInit, OnDestroy {

    private destroy$: Subject<boolean> = new Subject<boolean>()

    regresija: Regresija[] = []

    constructor(
        private api: RegresijaService
    ) {
    }

    @trace()
    async ngOnInit() {
        this.regresija = await exe(this.api.getRegresijaRegresijaGet())
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete()
    }

}
