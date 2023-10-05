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
import {NotFoundComponent} from "./core/pages/public/not-found/not-found.component";

// Function to handle loadChildren logic for CoreModule
const coreModuleLoader = () => import('./core/core.module').then(m => m.CoreModule);

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Hypnosis studio Alen'
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Hypnosis studio Alen - Blog',
    loadChildren: coreModuleLoader
  },
  {
    path: 'blog/:id',
    component: BlogBeriComponent,
    title: 'Hypnosis studio Alen - Blog objava',
    loadChildren: coreModuleLoader
  },
  {
    path: 'blog/edit/:id',
    component: BlogUrediComponent,
    title: 'Hypnosis studio Alen - Uredi objavo'
  },
  {
    path: 'blog-pregled',
    component: BlogPregledComponent,
    title: 'Hypnosis studio Alen - Pregled objav',
    loadChildren: coreModuleLoader
  },
  {
    path: 'blog-dodaj',
    component: BlogAddComponent,
    title: 'Hypnosis studio Alen - Dodaj nov blog'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Hypnosis studio Alen - Prijava'
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Hypnosis studio Alen - Admin'
  },
  {
    path: 'hipnoterapija',
    component: HipnoterapijaComponent,
    title: 'Hypnosis studio Alen - Hipnoterapija'
  },
  {
    path: 'samohipnoza',
    component: SamohipnozaComponent,
    title: 'Hypnosis studio Alen - Samohipnoza'
  },
  {
    path: 'regresija',
    component: RegresijaComponent,
    title: 'Hypnosis studio Alen - Regresija'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Hypnosis studio Alen - Stran ne obstaja ali ni najdena'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
