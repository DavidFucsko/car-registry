import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-car-list-view',
  templateUrl: './car-list-view.component.html',
  styleUrls: ['./car-list-view.component.scss']
})
export class CarListViewComponent {

  public data$ = of({
    titles: [
      { titleFor: 'firstField', title: 'License Number', keep: true },
      { titleFor: 'secondField', title: 'Owner', keep: true },
      { titleFor: 'thirdField', title: 'Car Type' },
      { titleFor: 'fourthField', title: 'Year' },
      { titleFor: 'fifth', title: 'Cm3' },
      { titleFor: 'sixth', title: 'Fuel Type' },
      { titleFor: '', title: 'Actions', keep: true }],
    data: [{
      firstField: 'Hello1',
      secondField: 'World1 World1 World1 World1 World1 World1 World1 ',
      thirdField: 'Hello1',
      fourthField: 'World1',
      fifth: 'Hello1',
      sixth: 'World1'
    },
    {
      firstField: 'Hello2',
      secondField: 'World2 World1 World1 World1 ',
      thirdField: 'Hello2',
      fourthField: 'World2',
      fifth: 'Hello2',
      sixth: 'World2'
    },
    {
      firstField: 'Hello3',
      secondField: 'World3World1 ',
      thirdField: 'Hello3',
      fourthField: 'World3',
      fifth: 'Hello3',
      sixth: 'World3'
    }, {
      firstField: 'Hello4',
      secondField: 'World4',
      thirdField: 'Hello4',
      fourthField: 'World4',
      fifth: 'Hello4',
      sixth: 'World4'
    }]
  });

  constructor() { }

  rowClicked(event: any): void {
    console.log(event);
  }

}
