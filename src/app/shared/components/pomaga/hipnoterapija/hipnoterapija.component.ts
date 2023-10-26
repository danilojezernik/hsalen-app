import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-hipnoterapija',
    templateUrl: './hipnoterapija.component.html'
})
export class HipnoterapijaComponent implements OnInit {

    hipnoterapija: any;

    constructor(
        private db: HttpClient,
    ) {
    }

    ngOnInit() {
        const path: string = 'assets/index.json'
        this.db.get(path).subscribe((response) => {
                this.hipnoterapija = response
            }
        )
    }
}
