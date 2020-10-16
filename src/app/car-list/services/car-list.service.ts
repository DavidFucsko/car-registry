import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { OptionLists } from 'src/app/models/option-lists.model';
import { environment } from 'src/environments/environment';
import { Car } from 'src/app/models/car.model';
import { DataTableInput } from 'src/app/models/data-table.model';

@Injectable({
    providedIn: 'root'
})
export class CarListService {
    constructor(private httpClient: HttpClient) { }

    getOptionLists(): Observable<OptionLists> {
        return of({
            owners: ['asdasd', 'sdasdas', 'sdasda'],
            carTypes: ['Volvo', 'BWM', 'Volkswagen', 'KIA'],
            fuelTypes: ['Gasoline', 'Petrol', 'Hybrid', 'Electric']
        });
        return this.httpClient.get<OptionLists>(environment.option_lists_endpoint).pipe(
            catchError(_ => of(new OptionLists()))
        );
    }

    // The Data and the table configuration should be separated to different requests
    getCarData(): Observable<DataTableInput> {
        return of({
            titles: [
                { titleFor: 'licenseNumber', title: 'License Number', keep: true },
                { titleFor: 'owner', title: 'Owner', keep: true },
                { titleFor: 'carType', title: 'Car Type' },
                { titleFor: 'year', title: 'Year' },
                { titleFor: 'cm3', title: 'Cm3' },
                { titleFor: 'fuelType', title: 'Fuel Type' },
                { titleFor: '', title: 'Actions', keep: true }],
            data: [{
                id: 1,
                licenseNumber: 'asdas',
                owner: 'asdasd',
                carType: 'Volvo',
                year: 2018,
                cm3: 1000,
                fuelType: 'sdasd',
            },
            {
                id: 2,
                licenseNumber: 'asdasdasas',
                owner: 'asdasd',
                carType: 'BMW',
                year: 2019,
                cm3: 2000,
                fuelType: 'sdaasdsd',
            },
            {
                id: 3,
                licenseNumber: 'asdasdasas',
                owner: 'asdasd',
                carType: 'sdasd',
                year: 1003,
                cm3: 3000,
                fuelType: 'sdaasdsd',
            },
            {
                id: 4,
                licenseNumber: 'asdasdasas',
                owner: 'asdasd',
                carType: 'sdasd',
                year: 2010,
                cm3: 2000,
                fuelType: 'sdaasdsd',
            }]
        } as DataTableInput);

        return this.httpClient.get<DataTableInput>(environment.car_list_endpoint).pipe(
            catchError(_ => of(new DataTableInput()))
        );
    }

    addNewCar(newCar: Car): Observable<string> {
        return this.httpClient.post<Car>(environment.car_list_endpoint, newCar, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).pipe(
            map(response => 'success'),
            catchError((error: HttpErrorResponse) => of(error.message))
        );
    }

    editCar(carToModify: Car): Observable<string> {
        return this.httpClient.put<Car>(`${environment.car_list_endpoint}/${carToModify.id}`, carToModify, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).pipe(
            map(response => 'success'),
            catchError((error: HttpErrorResponse) => of(error.message))
        );
    }

    reserveCar(carId: number): Observable<string> {
        return this.httpClient.get(`${environment.car_reserve_endpoint}/${carId}`).pipe(
            map(response => 'success'),
            catchError((error: HttpErrorResponse) => of(error.message))
        );
    }
}
