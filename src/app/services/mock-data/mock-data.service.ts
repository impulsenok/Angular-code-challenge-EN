import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockData } from 'src/app/models/mock-data.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getData(): Observable<MockData[]> {
    return of([
      {
        id: 1,
        name: 'Vitali',
        age: 15,
        cars: [
          {
            model: 'Kia',
            year: 2020,
          },
        ]
      },
      {
        id: 2,
        name: 'Danil',
        age: 25,
        cars: [
          {
            model: 'BMW',
            year: 2021,
          },
          {
            model: 'Mersedes',
            year: 2019,
          },
        ]
      },
      {
        id: 3,
        name: 'Marta',
        age: 35,
        cars: [
          {
            model: 'Fiat',
            year: 2010,
          },
          {
            model: 'Citroen',
            year: 2008,
          },
        ]
      },
    ])
  }
}
