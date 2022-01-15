import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { RouterModule } from '@angular/router';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavbarComponent } from './main-header/navbar/navbar.component';


@NgModule({
  declarations: [
    MainFooterComponent,
    MainHeaderComponent,
    NavbarComponent
  
  ],
  imports: [
    RouterModule,
    CommonModule,
    // CoreModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    MainHeaderComponent,
    MainFooterComponent,
  ]
})
export class LayoutsModule { }
