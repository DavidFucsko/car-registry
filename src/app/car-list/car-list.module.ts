import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListRoutingModule } from './car-list-routing.module';
import { CarListViewComponent } from './car-list-view/car-list-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CarListViewComponent],
  imports: [
    CommonModule,
    CarListRoutingModule,
    SharedModule
  ]
})
export class CarListModule { }
