import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListViewComponent } from './car-list-view/car-list-view.component';

const routes: Routes = [
    {
        path: '',
        component: CarListViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarListRoutingModule {

}
