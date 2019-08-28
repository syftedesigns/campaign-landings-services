import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankComponent } from './thank/thank.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './page.routes';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PagesRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    ThankComponent
  ]
})
export class PagesModule { }
