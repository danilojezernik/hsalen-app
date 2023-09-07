import {Component, OnDestroy, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {ApiService} from "../../../services/api/services/api.service";

@Component({
    selector: 'app-hipnoterapija',
    templateUrl: './hipnoterapija.component.html',
    styleUrls: ['./hipnoterapija.component.css']
})
export class HipnoterapijaComponent implements OnInit, OnDestroy {

    private destroy$: Subject<boolean> = new Subject<boolean>();


    constructor(
        private api: ApiService
    ) {
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
