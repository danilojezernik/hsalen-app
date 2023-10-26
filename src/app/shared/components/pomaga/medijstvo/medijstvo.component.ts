import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-medijstvo',
    templateUrl: './medijstvo.component.html'
})
export class MedijstvoComponent implements OnInit {

    medijstvo: any;

    constructor(
        private db: HttpClient,
    ) {
    }

    ngOnInit() {
        const path: string = 'assets/index.json'
        this.db.get(path).subscribe((response) => {
                this.medijstvo = response
            }
        )
    }
}

