import { Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentInit, Component, ContentChildren } from '@angular/core';

import { DataTableInput } from 'src/app/models/data-table.model';
import { DataTableColMarkerDirective } from '../directives/data-table-row-marker.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input()
  data: DataTableInput;

  public dataProperties = [];
  public titlesToRender = [];

  @ContentChildren(DataTableColMarkerDirective) tableColTemplates;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
    if (this.data && this.data.data) {
      this.initializeDataArrays();
    }
    this.observer.observe('(max-width: 37.5em)').subscribe(result => {
      if (result.matches) {
        const filteredTitles = this.data.titles.filter(title => title.keep);
        this.titlesToRender = filteredTitles.map(title => title.title);
        this.dataProperties = filteredTitles.filter(title => !!title.titleFor).map(title => title.titleFor);
      } else {
        this.initializeDataArrays();
      }
    });
  }

  rowClicked(tableCol: DataTableColMarkerDirective, data: any): void {
    tableCol.clicked.emit(data);
  }

  private initializeDataArrays(): void {
    this.dataProperties = Object.keys(this.data.data[0]);
    this.titlesToRender = this.data.titles.map(title => title.title);
  }

}
