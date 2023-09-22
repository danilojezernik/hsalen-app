import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./core/pages/public/index/index.component";
import {BlogComponent} from "./core/pages/public/blog/blog.component";
import {BlogAddComponent} from "./core/pages/private/blog-dodaj/blog-add.component";
import {LoginComponent} from "./core/pages/public/login/login.component";
import {AdminComponent} from "./core/pages/private/admin/admin.component";
import {BlogPregledComponent} from "./core/pages/private/blog-pregled/blog-pregled.component";
import {BlogBeriComponent} from "./core/pages/public/blog-beri/blog-beri.component";
import {BlogUrediComponent} from "./core/pages/private/blog-uredi/blog-uredi.component";
import {HipnoterapijaComponent} from "./core/pages/public/hipnoterapija/hipnoterapija.component";
import {SamohipnozaComponent} from "./core/pages/public/samohipnoza/samohipnoza.component";
import {RegresijaComponent} from "./core/pages/public/regresija/regresija.component";


const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'blog/:id', component: BlogBeriComponent
  },
  {
    path: 'blog/edit/:id', component: BlogUrediComponent
  },
  {
    path: 'blog-pregled', component: BlogPregledComponent
  },
  {
    path: 'blog-dodaj', component: BlogAddComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'hipnoterapija', component: HipnoterapijaComponent
  },
  {
    path: 'samohipnoza', component: SamohipnozaComponent
  },
  {
    path: 'regresija', component: RegresijaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
