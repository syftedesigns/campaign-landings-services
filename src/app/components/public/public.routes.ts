import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServicesLocatorComponent } from './services-locator/services-locator.component';
import { SpanishLocatorComponent } from './services-locator/lang/spanish-locator/spanish-locator.component';

const routes: Routes = [
    {
        path: '',
        component: SpanishLocatorComponent,
        data: {Title: 'Start your own business with our services | Syftedesigns.com'}
    },
    {
        path: 'latam',
        component: ServicesLocatorComponent,
        data: {Title: 'Empieza tu negocio con Syfte | Syftedesigns.com'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
