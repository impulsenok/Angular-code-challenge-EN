import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleImgComponent } from "../vehicle-img/vehicle-img.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormModel } from 'src/app/models/from.model';
import { VehicleTypes } from 'src/app/models/vehicle-types.model';
import { PlateNumberDirective } from 'src/app/directive/plate-number.directive';
import { PlateNumberValidator } from 'src/app/validators/plate-number.validator';
import { DataHelperService } from 'src/app/services/data-helper/data-helper.service';
import { MockDataService } from 'src/app/services/mock-data/mock-data.service';
import { Store } from '@ngrx/store';
import { StoreMockData } from 'src/app/store/mock-data/mock-data-store.models';
import { loadDataAction } from 'src/app/store/mock-data/mock-data.actions';
import { selectorMockData } from 'src/app/store/mock-data/mock-data.selectors';
import { Observable } from 'rxjs';
import { MockData } from 'src/app/models/mock-data.model';

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
export class FormComponent implements OnInit {

  public vehicleTypes: Array<VehicleTypes> = ['auto', 'motor', 'scooter'];

  private store = inject(Store<StoreMockData>);
  private dataSource = inject(DataHelperService);
  public mockData$ = inject(MockDataService).getData();
  public someDummyUsers$: Observable<StoreMockData> | null = null;

  public subTypes = this.dataSource.getData();

  constructor() { }

  ngOnInit(): void {
    this.store.dispatch(loadDataAction());
    this.someDummyUsers$ = this.store.select(selectorMockData);
  }

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
    console.log('here is form submit: ', this.form.value);
  }
}
