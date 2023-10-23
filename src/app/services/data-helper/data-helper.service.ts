import { Injectable } from '@angular/core';
import { Vehicles } from '../../models/vehicle-types.model';

@Injectable({
  providedIn: 'root'
})
export class DataHelperService {

  constructor() { }

  getData(): Vehicles {
    return {
      auto: [
        'Hatchback',
        'Sedan',
        'Station',
        'Cabriolet',
        'Coupé',
        'Multi Purpose Vehicle (MVP)',
        'Terreinauto',
      ],
      motor: [
        'All-road',
        'Naked',
        'Enduro',
        'Race',
        'Toermotor',
        'Chopper',
        'Zijspan',
      ],
      scooter: []
    }
  }
}
