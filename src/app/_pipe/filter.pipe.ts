import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any, propName: string, secPropName?: string): any {
    if (value.length === 0) {
      return value;
    }

    if (filterString.indexOf(' ') !== -1) {
      const strings = filterString.split(/[ ,]+/);
      const tempArray = [];
      const resultArray = [];
      for (const item of value) {
        const user = item[propName].toLowerCase();
        const currentSearch = strings[0].toLowerCase();
        if (user.indexOf(currentSearch) !== -1) {
          tempArray.push(item);
        } else if (secPropName) {
          const secUser = item[secPropName].toLowerCase();
          if (secUser.indexOf(currentSearch) !== -1) {
            tempArray.push(item);
          }
        }
      }
      for (const item of tempArray) {
        const user = item[propName].toLowerCase();
        const currentSearch = strings[1].toLowerCase();
        if (user.indexOf(currentSearch) !== -1) {
          resultArray.push(item);
        } else if (secPropName) {
          const secUser = item[secPropName].toLowerCase();
          if (secUser.indexOf(currentSearch) !== -1) {
            resultArray.push(item);
          }
        }
      }
      return resultArray;
    } else {
      const resultArray = [];
      for (const item of value) {
        const user = item[propName].toLowerCase();
        const currentSearch = filterString.toLowerCase();
        if ((currentSearch.length > 1) && (user.indexOf(currentSearch) !== -1)) {
          resultArray.push(item);
        } else if (secPropName) {
          const secUser = item[secPropName].toLowerCase();
          if ((currentSearch.length > 1) && (secUser.indexOf(currentSearch) !== -1)) {
            resultArray.push(item);
          }
        }
      }
      if (resultArray.length === 0 && filterString.length > 2) {
        resultArray.push({firstName: 'No results found.'});
        return resultArray;
      }
      return resultArray;
    }
  }

}
