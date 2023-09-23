import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoBackComponent} from "./components/go-back/go-back.component";
import {KnjigaComponent} from "./components/knjiga/knjiga.component";
import {SpinnerComponent} from './components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {EditAddBlogComponent} from './components/dialog/edit-add-blog/edit-add-blog.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        GoBackComponent,
        KnjigaComponent,
        SpinnerComponent,
        EditAddBlogComponent
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
        MatDialogModule
    ]
})
export class SharedModule {
}
