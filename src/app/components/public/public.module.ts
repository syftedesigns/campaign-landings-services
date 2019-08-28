import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesLocatorComponent } from './services-locator/services-locator.component';
import { RenderModalsModule } from './modal-locator/render-modals.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public.routes';
import { AngularMaterialModule } from '../../angular-material.module';
import { ParticlesModule } from 'angular-particle';
import { SpanishLocatorComponent } from './services-locator/lang/spanish-locator/spanish-locator.component';
import { StaticModule } from '../static/static.module';

@NgModule({
  imports: [
    CommonModule,
    RenderModalsModule,
    RouterModule,
    FormsModule,
    PublicRoutingModule,
    AngularMaterialModule,
    ParticlesModule,
    StaticModule
  ],
  declarations: [
    ServicesLocatorComponent,
    SpanishLocatorComponent
  ]
})
export class PublicModule { }
