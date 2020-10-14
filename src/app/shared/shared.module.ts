import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataTableColMarkerDirective } from './directives/data-table-row-marker.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    DataTableComponent,
    DataTableColMarkerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    DataTableComponent,
    DataTableColMarkerDirective
  ]
})
export class SharedModule { }
