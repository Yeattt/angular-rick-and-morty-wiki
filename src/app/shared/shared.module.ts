import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
  ],
})
export class SharedModule { }
