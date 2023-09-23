import {Component, OnDestroy, OnInit} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-hipnoterapija',
    templateUrl: './hipnoterapija.component.html'
})
export class HipnoterapijaComponent implements OnInit, OnDestroy {

    hipnoterapija: any;
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private db: HttpClient) {
    }

    @trace()
    ngOnInit() {
        const path: string = 'assets/hipnoterapija.json'
        this.db.get(path).subscribe((response) => {
            this.hipnoterapija = response;
        })
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
