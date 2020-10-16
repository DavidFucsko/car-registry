import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Car } from 'src/app/models/car.model';
import { CarListService } from '../services/car-list.service';

@Component({
  selector: 'app-car-list-view',
  templateUrl: './car-list-view.component.html',
  styleUrls: ['./car-list-view.component.scss']
})
export class CarListViewComponent {

  public displayModal = false;
  public addCarForm: FormGroup;
  public currentCarModel: Car;
  public modalTitle: string;
  public loading: boolean;

  public optionLists$ = this.carListService.getOptionLists();
  public data$ = this.carListService.getCarData();

  constructor(private carListService: CarListService) { }

  rowClicked(carSelected: Car): void {
    this.currentCarModel = carSelected;
    this.modalTitle = 'Edit a Car';
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
