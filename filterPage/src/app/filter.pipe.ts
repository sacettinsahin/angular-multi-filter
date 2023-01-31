import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    filterText1: string,
    filterText2: string,
    property1: string,
    property2: string
  ): any[] {
    if (!items) {
      return [];
    }
    if (!filterText1 && !filterText2) {
      return items;
    }
    return items.filter(
      (item) =>
        (!filterText1 ||
          item[property1].toLowerCase().includes(filterText1.toLowerCase())) &&
        (!filterText2 ||
          item[property2].toLowerCase().includes(filterText2.toLowerCase()))
    );
  }
}
