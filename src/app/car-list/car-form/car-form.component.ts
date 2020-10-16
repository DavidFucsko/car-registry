import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Car } from 'src/app/models/car.model';
import { OptionLists } from 'src/app/models/option-lists.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  @Input()
  carModel: Car;

  @Input()
  public loading = false;

  @Input()
  optionLists: OptionLists;

  @Output()
  cancelled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  carEdited: EventEmitter<Car> = new EventEmitter<Car>();

  public addCarForm: FormGroup;

  public isEdit: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm(this.carModel);
    this.isEdit = !!this.carModel.licenseNumber && !!this.carModel.owner;
  }

  addCar(): void {
    this.carEdited.emit(this.addCarForm.value);
  }

  editCanceled(): void {
    this.cancelled.emit(false);
  }

  private initForm(car: Car): void {
    this.addCarForm = this.formBuilder.group({
      licenseNumber: [car.licenseNumber, [Validators.required]],
      owner: [car.owner, [Validators.required]],
      carType: [car.carType],
      year: [car.year],
      cm3: [car.cm3],
      fuelType: [car.fuelType]
    });
  }

}
