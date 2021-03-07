import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = 'sin valor'): Heroe[] {
    switch (orderBy) {
      case 'nombre':
        return heroes = heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1);
        break;
      case 'vuela':
        return heroes = heroes.sort( (a,b) => (a.fly > b.fly) ? 1 : -1);
        break;
      case 'color':
        return heroes = heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1);
        break;
      default:
        return heroes;
    }
  }

}
