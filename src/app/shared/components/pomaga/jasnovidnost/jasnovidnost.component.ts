import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-jasnovidnost',
    templateUrl: './jasnovidnost.component.html'
})
export class JasnovidnostComponent implements OnInit {

    jasnovidnost: any;

    constructor(
        private db: HttpClient,
    ) {
    }

    ngOnInit() {
        const path: string = 'assets/index.json'
        this.db.get(path).subscribe((response) => {
                this.jasnovidnost = response
            }
        )
    }
}
