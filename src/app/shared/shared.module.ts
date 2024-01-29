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
import {HeroComponent} from './components/hero/hero-index/hero.component';
import {OfferComponent} from './components/offer/offer.component';
import {NotificationComponent} from './components/notification-index/notification.component';
import {SlovenainDatePipe} from './pipes/slovenian-date/slovenain-date.pipe';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ErrorBackendComponent} from './components/error/error-backend-admin/error-backend.component';
import {ErrorBackendClientComponent} from './components/error/error-backend-client/error-backend-client.component';
import {HeroBreadcrumbsComponent} from './components/hero/hero-breadcrumbs/hero-breadcrumbs.component';
import {FirstLetterCapitaldPipe} from './pipes/first-letter-capitalized/first-letter-capitald.pipe';
import {HipnoterapijaComponent} from './components/pomaga/hipnoterapija/hipnoterapija.component';
import {JasnovidnostComponent} from './components/pomaga/jasnovidnost/jasnovidnost.component';
import {MedijstvoComponent} from './components/pomaga/medijstvo/medijstvo.component';
import {MainDescriptionComponent} from './components/main-description/main-description.component';
import {SlovenianDateTimePipe} from "./pipes/slovenian-date-time/slovenian-date-time.pipe";
import {HeroDashboardComponent} from './components/hero/hero-dashboard/hero-dashboard.component';
import {HideHeaderFooterDirective} from './directive/hide-header-footer/hide-header-footer.directive';
import {LimitedBlogsComponent} from './components/limited-blogs/limited-blogs.component';
import {TruncatePipe} from './pipes/truncate/truncate.pipe';
import {FormatTextPipe} from './pipes/format-text/format-text-pipe';
import {TherapyMoreComponent} from './components/therapy-more/therapy-more.component';
import {ReviewComponent} from './components/review/review.component';
import {TemplateErrorComponent} from './components/template-error/template-error.component';

@NgModule({
  declarations: [
    GoBackComponent,
    KnjigaComponent,
    SpinnerComponent,
    HeroComponent,
    OfferComponent,
    NotificationComponent,
    SlovenainDatePipe,
    ErrorBackendComponent,
    ErrorBackendClientComponent,
    HeroBreadcrumbsComponent,
    FirstLetterCapitaldPipe,
    HipnoterapijaComponent,
    JasnovidnostComponent,
    MedijstvoComponent,
    MainDescriptionComponent,
    SlovenianDateTimePipe,
    HeroDashboardComponent,
    HideHeaderFooterDirective,
    LimitedBlogsComponent,
    TruncatePipe,
    FormatTextPipe,
    TherapyMoreComponent,
    ReviewComponent,
    TemplateErrorComponent
  ],
  exports: [
    GoBackComponent,
    KnjigaComponent,
    SpinnerComponent,
    HeroComponent,
    OfferComponent,
    NotificationComponent,
    SlovenainDatePipe,
    ErrorBackendComponent,
    ErrorBackendClientComponent,
    HeroBreadcrumbsComponent,
    MainDescriptionComponent,
    FirstLetterCapitaldPipe,
    HipnoterapijaComponent,
    JasnovidnostComponent,
    MedijstvoComponent,
    SlovenianDateTimePipe,
    HeroDashboardComponent,
    HideHeaderFooterDirective,
    LimitedBlogsComponent,
    TruncatePipe,
    FormatTextPipe,
    TherapyMoreComponent,
    ReviewComponent,
    TemplateErrorComponent
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
    RouterLink,
    MatSnackBarModule
  ]
})
export class SharedModule {
}
