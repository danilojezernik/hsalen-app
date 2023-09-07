import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {ApiService} from "../../../services/api/services/api.service";
import {Index} from "../../../services/api/models";
import {IndexService} from "../../../services/api/services/index.service";
import {exe} from "../../../utils/exe";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],

})
export class IndexComponent implements OnInit, OnDestroy {

    private destroy$: Subject<boolean> = new Subject<boolean>();

    index: Index[] = []

    constructor(
        private api: IndexService
    ) {
    }

    @trace()
    async ngOnInit() {
        this.index = await exe(this.api.getIndexIndexGet())
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
