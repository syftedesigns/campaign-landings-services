import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLocatorComponent } from './modals/modal-locator.component';
import { AngularMaterialModule } from '../../../angular-material.module';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './modals/loader.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  declarations: [
    ModalLocatorComponent,
    LoaderComponent
  ],
  exports: [
    ModalLocatorComponent,
    LoaderComponent
  ],
  entryComponents: [
    ModalLocatorComponent,
    LoaderComponent
  ]
})
export class RenderModalsModule { }
