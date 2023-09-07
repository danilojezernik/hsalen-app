import {Component, OnInit, OnDestroy} from '@angular/core';
import {trace} from "../../../utils/trace";
import {Subject} from "rxjs";
import {exe} from "../../../utils/exe";
import {SamohipnozaService} from "../../../services/api/services/samohipnoza.service";
import {Samohipnoza} from "../../../services/api/models/samohipnoza";

@Component({
    selector: 'app-samohipnoza',
    templateUrl: './samohipnoza.component.html',
    styleUrls: ['./samohipnoza.component.css']
})
export class SamohipnozaComponent implements OnInit, OnDestroy {

    private destroy$: Subject<boolean> = new Subject<boolean>();

    samohipnoza: Samohipnoza[] = [];

    constructor(
        private api: SamohipnozaService
    ) {
    }

    @trace()
    async ngOnInit() {
        this.samohipnoza = await exe(this.api.getSamohipnozaSamohipnozaGet())
    }

    @trace()
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
