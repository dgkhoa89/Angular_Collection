import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(numbers: number[], sortFlag: number): number[] {
    
    var result =  numbers.sort((a,b)=>{
      if(a>b) return sortFlag;
      else if(a<b) return -sortFlag;
      else return 0;
    })
    
    // ... result ==> create empty var, then assign value;
    return [...result];

  }

}
