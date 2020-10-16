import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListRoutingModule } from './car-list-routing.module';
import { CarListViewComponent } from './car-list-view/car-list-view.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';

@NgModule({
  declarations: [CarListViewComponent, CarFormComponent],
  imports: [
    CommonModule,
    CarListRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CarListModule { }
