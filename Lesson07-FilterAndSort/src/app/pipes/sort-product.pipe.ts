import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortProduct'
})
export class SortProductPipe implements PipeTransform {

    transform(products: any[], sortCol: string, sortType: number): any {
        console.log(sortCol + " " + sortType);
        if (sortCol == 'name') {
            products.sort((a,b)=>{
                if(a.name>b.name) return sortType;
                else if(a.name<b.name) return -sortType;
                else return 0;
            })
        }
        if (sortCol =='price') {
            products.sort((a,b)=>{
                if(a.price > b.price) return sortType;
                else if(a.price < b.price) return -sortType;
                else return 0;
            })
        }
        return products;
    }
}
