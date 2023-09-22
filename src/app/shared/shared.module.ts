import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoBackComponent} from "./components/go-back/go-back.component";
import {KnjigaComponent} from "./components/knjiga/knjiga.component";


@NgModule({
  declarations: [
    GoBackComponent,
    KnjigaComponent
  ],
  exports: [
    GoBackComponent,
    KnjigaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
