import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [NavBarComponent, DataTableComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent]
})
export class SharedModule { }
