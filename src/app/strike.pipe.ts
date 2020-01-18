import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strike',
})
export class StrikePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const [h, t] = value.split('.');
    if (+t > 0) {
      return +value;
    } else {
      return +h;
    }
  }
}
