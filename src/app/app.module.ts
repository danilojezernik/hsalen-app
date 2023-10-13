import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LOCALE_ID} from '@angular/core';

import {AppComponent} from './app.component';

import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {InterceptorService} from "./core/services/interceptor/interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'sl'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
