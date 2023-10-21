import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleImgComponent } from "../vehicle-img/vehicle-img.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormModel } from 'src/app/models/from.model';
import { VehicleTypes, Vehicles } from 'src/app/models/vehicle-types.model';
import { PlateNumberDirective } from 'src/app/directive/plate-number.directive';
import { PlateNumberValidator } from 'src/app/validators/plate-number.validator';
import { DataHelperService } from 'src/app/services/data-helper.service';

const SCOOTER = 'scooter';

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    imports: [
      CommonModule,
      VehicleImgComponent,
      ReactiveFormsModule,
      PlateNumberDirective,
    ]
})
export class FormComponent {

  public vehicleTypes: Array<VehicleTypes> = ['auto', 'motor', 'scooter'];
  private dataSource = inject(DataHelperService);

  public subTypes = this.dataSource.getData();

  constructor() { }

  public form = new FormGroup<FormModel>({
    vehicleType: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    vehicleSubtype: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    plateNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, PlateNumberValidator()]
    }),
  })

  get mainTypeValue() {
    return this.form.get('vehicleType')?.value;
  }

  get selectedTypeSubTypes(): any {
    return this.mainTypeValue ? this.subTypes[this.mainTypeValue] : [];
  }

  get plateNumber() {
    return this.form.get('plateNumber');
  }

  isScooterSelected(): boolean {
    return this.mainTypeValue === SCOOTER;
  }

  onSubmit(): void {
    this.form.markAsTouched();
    console.log('here is form submit: ', this.form);
  }
}
