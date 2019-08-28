import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThankComponent } from './thank/thank.component';

const routes: Routes = [
    { path: '', component: ThankComponent },
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
export class PagesRoutingModule {}
