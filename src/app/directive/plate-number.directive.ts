import { Directive, ElementRef, HostListener } from '@angular/core';
import { KentekenCheck } from 'rdw-kenteken-check';

@Directive({
  selector: '[appPlateNumber]',
  standalone: true
})
export class PlateNumberDirective {

  constructor(private elmt: ElementRef<HTMLInputElement>) {}

  @HostListener('keyup') validate() {

    // I decided to left auto formatting with help of kenteken library check here.

    const tmp = new KentekenCheck(this.elmt.nativeElement.value, undefined, undefined, undefined, 'ERR').formatLicense();
    if (tmp !== 'ERR') {
      this.elmt.nativeElement.value = tmp;
    }

    // This can be activated in case of simple plateNumber formatting with '-' symbols.
    // I guess this should be a part of a Test task as well, but source code(html file) doesn't have additional input, as on screenshot
    // in this case i'm little bit confused to meet all demands about this test.
    // So i decided just left this directive code below that will allow u to enable plate number formatting.

    // let value = this.elmt.nativeElement.value.replaceAll('-', '').match(/.{1,2}/g) || [];
    // this.elmt.nativeElement.value = 
    //   value
    //     .map((i: string, index: number) =>
    //       (index + 1) < value.length ?
    //         i + '-' :
    //         i
    //     )
    //     .join('');
  }
}
