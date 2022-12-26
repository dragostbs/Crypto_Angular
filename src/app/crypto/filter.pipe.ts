import { Pipe, PipeTransform } from '@angular/core';
import { Crypto } from './crypto.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(coins: Crypto[], search: string = ''): Crypto[] {
    if (!search.trim()) {
      return coins;
    }

    return coins.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
