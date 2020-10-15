import { Input, OnInit } from '@angular/core';
import { AfterContentInit, Component, ContentChildren } from '@angular/core';
import { DataTableInput } from 'src/app/models/data-table.model';
import { DataTableColMarkerDirective } from '../directives/data-table-row-marker.directive';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterContentInit {

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
    this.observer.observe('(max-width: 75em)').subscribe(result => {
      if (result.matches) {
        this.dataProperties = Object.keys(this.data.data[0])
          .filter(dataKey => (this.data.titles[0].titleFor === dataKey || this.data.titles[0].titleFor === '') && this.data.titles[0].keep);
        this.titlesToRender = this.data.titles.filter(title => title.keep);
      } else {
        this.initializeDataArrays();
      }
    });
  }

  ngAfterContentInit(): void {
    console.log(this.tableColTemplates);
  }

  rowClicked(tableCol: DataTableColMarkerDirective, data: any): void {
    tableCol.clicked.emit(data);
  }

  private initializeDataArrays(): void {
    this.dataProperties = Object.keys(this.data.data[0]);
    this.titlesToRender = this.data.titles;
  }

}
