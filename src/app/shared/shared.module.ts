import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoBackComponent} from "./components/go-back/go-back.component";
import {KnjigaComponent} from "./components/knjiga/knjiga.component";
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [
        GoBackComponent,
        KnjigaComponent,
        SpinnerComponent
    ],
    exports: [
        GoBackComponent,
        KnjigaComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        RouterLink
    ]
})
export class SharedModule {
}
