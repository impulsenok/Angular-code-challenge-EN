import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypes } from 'src/app/models/vehicle-types.model';

@Component({
  selector: 'app-vehicle-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-img.component.html',
  styleUrls: ['./vehicle-img.component.css']
})
export class VehicleImgComponent {

  @Input()
  type?: VehicleTypes | '';

  constructor() { }

  get src(): string {
    return this.type ? `./assets/${this.type}.jpg` : '';
  }
}
