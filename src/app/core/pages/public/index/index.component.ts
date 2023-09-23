import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {trace} from "../../../utils/trace";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {


    index: any;
    private destroy$: Subject<boolean> = new Subject<boolean>();


    constructor(private db: HttpClient) {
    }

    @trace()
    ngOnInit() {
        const path: string = 'assets/index.json'
        this.db.get(path).subscribe((response) => {
                this.index = response
            }
        )
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
