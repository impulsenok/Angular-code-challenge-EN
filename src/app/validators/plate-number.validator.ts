import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { KentekenCheck } from "rdw-kenteken-check";

export function PlateNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const tmp = new KentekenCheck(control.value, undefined, undefined, undefined, 'ERR').formatLicense();
        return tmp === 'ERR' ? {invalidPlate: true} : null;
    };
  }