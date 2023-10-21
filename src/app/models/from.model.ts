import { FormControl } from "@angular/forms"
import { VehicleTypes, autoSubTypes, motoSubTypes } from "./vehicle-types.model";

export interface FormModel {
    vehicleType: FormControl<VehicleTypes | ''>;
    vehicleSubtype: FormControl<autoSubTypes | motoSubTypes | ''>;
    plateNumber: FormControl<string>;
}