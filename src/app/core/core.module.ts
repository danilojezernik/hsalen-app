import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogAddComponent} from "./pages/private/blog-dodaj/blog-add.component";
import {BlogPregledComponent} from "./pages/private/blog-pregled/blog-pregled.component";
import {LoginComponent} from "./pages/public/login/login.component";
import {AdminComponent} from "./pages/private/admin/admin.component";
import {BlogBeriComponent} from "./pages/public/blog-beri/blog-beri.component";
import {BlogUrediComponent} from "./pages/private/blog-uredi/blog-uredi.component";
import {IndexComponent} from "./pages/public/index/index.component";
import {HipnoterapijaComponent} from "./pages/public/hipnoterapija/hipnoterapija.component";
import {SamohipnozaComponent} from "./pages/public/samohipnoza/samohipnoza.component";
import {RegresijaComponent} from "./pages/public/regresija/regresija.component";
import {BlogComponent} from "./pages/public/blog/blog.component";
import {HeaderComponent} from "./header/header.component";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NotFoundComponent} from './pages/public/not-found/not-found.component';
import {OmeniComponent} from './pages/public/omeni/omeni.component';
import {MedijiPregledComponent} from './pages/private/mediji-pregled/mediji-pregled.component';
import {MedijiUrediComponent} from './pages/private/mediji-uredi/mediji-uredi.component';
import {MedijiBeriComponent} from './pages/private/mediji-beri/mediji-beri.component';
import {MedijiDodajComponent} from './pages/private/mediji-dodaj/mediji-dodaj.component';
import {ContactComponent} from './pages/public/contact/contact.component';
import {EmailPregledComponent} from './pages/private/email-pregled/email-pregled.component';
import {EmailIdComponent} from '../shared/components/dialog/email-id/email-id.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import { JasnovidnostComponent } from './pages/public/jasnovidnost/jasnovidnost.component';
import { MedijstvoComponent } from './pages/public/medijstvo/medijstvo.component';


@NgModule({
    declarations: [
        BlogAddComponent,
        BlogPregledComponent,
        LoginComponent,
        AdminComponent,
        BlogBeriComponent,
        BlogUrediComponent,
        IndexComponent,
        HipnoterapijaComponent,
        SamohipnozaComponent,
        RegresijaComponent,
        BlogComponent,
        HeaderComponent,
        NotFoundComponent,
        OmeniComponent,
        MedijiPregledComponent,
        MedijiUrediComponent,
        MedijiBeriComponent,
        MedijiDodajComponent,
        ContactComponent,
        EmailPregledComponent,
        EmailIdComponent,
        JasnovidnostComponent,
        MedijstvoComponent,
    ],
    exports: [
        BlogAddComponent,
        BlogPregledComponent,
        LoginComponent,
        AdminComponent,
        BlogBeriComponent,
        BlogUrediComponent,
        IndexComponent,
        HipnoterapijaComponent,
        SamohipnozaComponent,
        RegresijaComponent,
        BlogComponent,
        HeaderComponent,
        NotFoundComponent,
        OmeniComponent,
        MedijiPregledComponent,
        MedijiUrediComponent,
        MedijiBeriComponent,
        MedijiDodajComponent,
        ContactComponent,
        EmailPregledComponent,
        EmailIdComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        MatInputModule,
        FormsModule,
        SharedModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSnackBarModule,
        AngularEditorModule
    ]
})
export class CoreModule {
}
