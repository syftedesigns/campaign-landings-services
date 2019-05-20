import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServicesLocatorComponent } from './services-locator/services-locator.component';

const routes: Routes = [
    {
        path: '',
        component: ServicesLocatorComponent,
        data: {Title: 'Start your own business with our services | Syftedesigns.com'}
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
