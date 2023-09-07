import {forwardRef, NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BlogComponent} from './pages/public/blog/blog.component';
import {IndexComponent} from './pages/public/index/index.component';
import {BlogAddComponent} from './pages/private/blog-dodaj/blog-add.component';
import {BlogPregledComponent} from './pages/private/blog-pregled/blog-pregled.component';
import {LoginComponent} from './pages/public/login/login.component';
import {AdminComponent} from './pages/private/admin/admin.component';
import {BlogBeriComponent} from './pages/public/blog-beri/blog-beri.component';
import {GoBackComponent} from "./components/go-back/go-back.component";
import {BlogUrediComponent} from './pages/private/blog-uredi/blog-uredi.component';
import {HipnoterapijaComponent} from './pages/public/hipnoterapija/hipnoterapija.component';
import {HeaderComponent} from "./header/header.component";
import {SamohipnozaComponent} from './pages/public/samohipnoza/samohipnoza.component';
import {RegresijaComponent} from './pages/public/regresija/regresija.component';
import {KnjigaComponent} from "./components/knjiga/knjiga.component";
import {ApiModule} from "./services/api/api.module";
import {environment} from "../environments/environment";
import {HttpApiInterceptor} from "./middleware/api-interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => HttpApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogAddComponent,
    BlogPregledComponent,
    LoginComponent,
    AdminComponent,
    BlogBeriComponent,
    BlogUrediComponent,
    IndexComponent,
    HipnoterapijaComponent,
    SamohipnozaComponent,
    RegresijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: environment.backUrl}),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    GoBackComponent,
    HeaderComponent,
    KnjigaComponent,
    MatSnackBarModule

  ],
  providers: [
    HttpApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
