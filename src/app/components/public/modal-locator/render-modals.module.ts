import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLocatorComponent } from './modals/modal-locator.component';
import { AngularMaterialModule } from '../../../angular-material.module';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './modals/loader.component';
import { SpanishModalComponent } from './modals/lang/spanish-modal/spanish-modal.component';
import { StaticModule } from '../../static/static.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    StaticModule
  ],
  declarations: [
    ModalLocatorComponent,
    LoaderComponent,
    SpanishModalComponent
  ],
  exports: [
    ModalLocatorComponent,
    LoaderComponent,
    SpanishModalComponent
  ],
  entryComponents: [
    ModalLocatorComponent,
    LoaderComponent,
    SpanishModalComponent
  ]
})
export class RenderModalsModule { }
