import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anonymize'
})
export class AnonymizePipe implements PipeTransform {

  transform(value: string, length?: number): unknown {
    return length && value.length === length ? '[INVALID BANK ACCOUNT]' : value.substr(0, 4).padEnd(value.length, '*');
  }

}
