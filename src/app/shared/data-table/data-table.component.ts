import { AfterContentInit, Component, ContentChild, ContentChildren } from '@angular/core';
import { DataTableColMarkerDirective } from '../directives/data-table-row-marker.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterContentInit {

  private data = {
    titles: ['License Number', 'Owner', 'Car Type', 'Year', 'Cm3', 'Fuel Type', 'Actions']
  };

  @ContentChildren(DataTableColMarkerDirective) tableRowTemplate;

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.tableRowTemplate);
  }

}
