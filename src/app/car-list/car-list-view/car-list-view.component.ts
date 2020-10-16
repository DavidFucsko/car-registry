import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { of } from 'rxjs';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-list-view',
  templateUrl: './car-list-view.component.html',
  styleUrls: ['./car-list-view.component.scss']
})
export class CarListViewComponent implements OnInit {

  public displayModal = false;
  public addCarForm: FormGroup;
  public currentCarModel: Car;
  public modalTitle: string;
  public loading: boolean;

  public optionLists$ = of({
    owners: ['asdasd', 'sdasdas', 'sdasda'],
    carTypes: ['Volvo', 'BWM', 'Volkswagen', 'KIA'],
    fuelTypes: ['Gasoline', 'Petrol', 'Hybrid', 'Electric']
  });

  public optionLists: { owners: string[], carTypes: string[], fuelTypes: string[] };

  public data$ = of({
    titles: [
      { titleFor: 'licenseNumber', title: 'License Number', keep: true },
      { titleFor: 'owner', title: 'Owner', keep: true },
      { titleFor: 'carType', title: 'Car Type' },
      { titleFor: 'year', title: 'Year' },
      { titleFor: 'cm3', title: 'Cm3' },
      { titleFor: 'fuelType', title: 'Fuel Type' },
      { titleFor: '', title: 'Actions', keep: true }],
    data: [{
      licenseNumber: 'asdas',
      owner: 'asdasd',
      carType: 'Volvo',
      year: 2018,
      cm3: 1000,
      fuelType: 'sdasd',
    },
    {
      licenseNumber: 'asdasdasas',
      owner: 'asdasd',
      carType: 'BMW',
      year: 2019,
      cm3: 2000,
      fuelType: 'sdaasdsd',
    },
    {
      licenseNumber: 'asdasdasas',
      owner: 'asdasd',
      carType: 'sdasd',
      year: 1003,
      cm3: 3000,
      fuelType: 'sdaasdsd',
    },
    {
      licenseNumber: 'asdasdasas',
      owner: 'asdasd',
      carType: 'sdasd',
      year: 2010,
      cm3: 2000,
      fuelType: 'sdaasdsd',
    }]
  });

  constructor() { }

  ngOnInit(): void {
    this.optionLists$.subscribe(optionLists => this.optionLists = optionLists);
  }

  rowClicked(carSelected: Car): void {
    this.currentCarModel = carSelected;
    this.modalTitle = 'Edit Car'
    this.toggleModalState(true);
  }

  toggleModalState(newState: boolean): void {
    this.displayModal = newState;
  }

  addCar(carToAdd: Car): void {
    this.loading = true;
    setTimeout(() => {
      console.log(carToAdd);
      this.loading = false;
    }, 3000);
  }

  addNewCar(): void {
    this.currentCarModel = new Car();
    this.modalTitle = 'Add a New Car';
    this.toggleModalState(true);
  }
}
