import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


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
    HeaderComponent
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
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterLink,
    MatInputModule,
    FormsModule,
    SharedModule
  ]
})
export class CoreModule {
}
