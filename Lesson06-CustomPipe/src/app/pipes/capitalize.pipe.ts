import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: string, ...args: any[]): any {
        // value.replace(/\w\S*/g,(word)=>{
        //   console.log(word);
        //   return word;

        // });
        var arr = value.split(' ');
        var result = '';
        arr.forEach((str,index) => {
            result += str.charAt(0).toUpperCase() + str.substring(1) + (index==arr.length-1?'':'_');
        });
        console.log(result);
        
        return result;
    }

}
