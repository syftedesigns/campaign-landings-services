import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SYFTE_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { PublicComponent } from './components/public/public.component';
import { AngularMaterialModule } from './angular-material.module';
import { StaticModule } from './components/static/static.module';
import { ServicesModule } from './services/services.module';
import { PagesComponent } from './components/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SYFTE_ROUTES,
    BrowserAnimationsModule,
    NgwWowModule,
    AngularMaterialModule,
    StaticModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
