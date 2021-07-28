import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nocarriage'
})
export class NocarriagePipe implements PipeTransform {

  transform(value: string, charToRemove: string='', depth:number=0): string {

    const re = new RegExp(charToRemove,"g");
    const val =  value.replace(/\n/g, ' ')

    return charToRemove ? val.replace(re, '') : val
  }

}
