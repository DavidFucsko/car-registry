import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableColMarkerDirective } from './directives/data-table-row-marker.directive';
import { LayoutModule } from '@angular/cdk/layout';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DataTableComponent,
    DataTableColMarkerDirective,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    NavBarComponent,
    DataTableComponent,
    DataTableColMarkerDirective,
    ModalComponent
  ]
})
export class SharedModule { }
