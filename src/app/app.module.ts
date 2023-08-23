import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

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

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    IndexComponent,
    BlogAddComponent,
    BlogPregledComponent,
    LoginComponent,
    AdminComponent,
    BlogBeriComponent,
    BlogUrediComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    GoBackComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
