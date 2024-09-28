import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogAddComponent} from "./pages/private/blog/blog-add/blog-add.component";
import {BlogPregledComponent} from "./pages/private/blog/blog-pregled/blog-pregled.component";
import {LoginComponent} from "./pages/public/login/login.component";
import {AdminComponent} from "./pages/private/admin/admin.component";
import {BlogBeriComponent} from "./pages/public/blog-beri/blog-beri.component";
import {BlogUrediComponent} from "./pages/private/blog/blog-uredi/blog-uredi.component";
import {IndexComponent} from "./pages/public/index/index.component";
import {HipnoterapijaComponent} from "./pages/public/hipnoterapija/hipnoterapija.component";
import {SamohipnozaComponent} from "./pages/public/samohipnoza/samohipnoza.component";
import {RegresijaComponent} from "./pages/public/regresija/regresija.component";
import {BlogComponent} from "./pages/public/blog/blog.component";
import {HeaderComponent} from "./header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
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
import {MedijiPregledComponent} from './pages/private/mediji/mediji-pregled/mediji-pregled.component';
import {MedijiUrediComponent} from './pages/private/mediji/mediji-uredi/mediji-uredi.component';
import {MedijiBeriComponent} from './pages/private/mediji/mediji-beri/mediji-beri.component';
import {MedijiDodajComponent} from './pages/private/mediji/mediji-dodaj/mediji-dodaj.component';
import {ContactComponent} from './pages/public/contact/contact.component';
import {EmailPregledComponent} from './pages/private/email-pregled/email-pregled.component';
import {GetIdComponent} from '../shared/components/dialog/get-id.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {JasnovidnostComponent} from './pages/public/jasnovidnost/jasnovidnost.component';
import {MedijstvoComponent} from './pages/public/medijstvo/medijstvo.component';
import {EventsComponent} from './pages/public/events/events.component';
import {EventsPregledComponent} from './pages/private/events/events-pregled/events-pregled.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {EventsAddComponent} from './pages/private/events/events-add/events-add.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {EventsUrediComponent} from './pages/private/events/events-uredi/events-uredi.component';
import {MatSelectModule} from "@angular/material/select";
import {
  SubscribersPregledComponent
} from './pages/private/subscribers/subscribers-pregled/subscribers-pregled.component';
import {SubscribersAddComponent} from './pages/private/subscribers/subscribers-add/subscribers-add.component';
import {SubscribersEditComponent} from './pages/private/subscribers/subscribers-edit/subscribers-edit.component';
import {NewsletterPregledComponent} from './pages/private/newsletter/newsletter-pregled/newsletter-pregled.component';
import {NewsletterAddComponent} from './pages/private/newsletter/newsletter-add/newsletter-add.component';
import {FooterComponent} from './footer/footer.component';
import {SuccessComponent} from './pages/public/success/success.component';
import {ReviewPregledComponent} from './pages/private/review/review-pregled/review-pregled.component';
import {ReviewDodajComponent} from './pages/private/review/review-dodaj/review-dodaj.component';
import {GalleryComponent} from './pages/public/gallery/gallery.component';
import {MatTabsModule} from "@angular/material/tabs";
import { GalleryAdminComponent } from './pages/private/gallery-admin/gallery-admin.component';

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
    GetIdComponent,
    JasnovidnostComponent,
    MedijstvoComponent,
    EventsComponent,
    EventsPregledComponent,
    EventsAddComponent,
    EventsUrediComponent,
    SubscribersPregledComponent,
    SubscribersAddComponent,
    SubscribersEditComponent,
    NewsletterPregledComponent,
    NewsletterAddComponent,
    FooterComponent,
    SuccessComponent,
    ReviewPregledComponent,
    ReviewDodajComponent,
    GalleryComponent,
    GalleryAdminComponent
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
    GetIdComponent,
    JasnovidnostComponent,
    MedijstvoComponent,
    EventsComponent,
    EventsPregledComponent,
    EventsAddComponent,
    EventsUrediComponent,
    SubscribersPregledComponent,
    SubscribersAddComponent,
    SubscribersEditComponent,
    NewsletterPregledComponent,
    NewsletterAddComponent,
    FooterComponent,
    SuccessComponent,
    ReviewPregledComponent,
    ReviewDodajComponent,
    GalleryComponent
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
    AngularEditorModule,
    RouterLinkActive,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class CoreModule {
}
