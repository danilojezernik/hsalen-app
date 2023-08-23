import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./pages/public/index/index.component";
import {BlogComponent} from "./pages/public/blog/blog.component";
import {BlogAddComponent} from "./pages/private/blog-dodaj/blog-add.component";
import {LoginComponent} from "./pages/public/login/login.component";
import {AdminComponent} from "./pages/private/admin/admin.component";
import {BlogPregledComponent} from "./pages/private/blog-pregled/blog-pregled.component";
import {BlogBeriComponent} from "./pages/public/blog-beri/blog-beri.component";


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
