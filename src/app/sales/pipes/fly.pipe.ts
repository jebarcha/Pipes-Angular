import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class FlyPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'vuela' : 'no vuela';
  }

}
