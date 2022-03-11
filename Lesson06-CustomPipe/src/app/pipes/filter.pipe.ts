import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(products: any[], id: string, name: string, status: boolean): any {

        if (!id && !name && !status) {
            return products;
        } else {
            if (id) {
                products = products.filter(x => {
                    return x.id.toString().indexOf(id) != -1;
                })
            }

            if (name) {
                products = products.filter(x => {
                    return x.name.toLowerCase().indexOf(name) != -1;
                })
            }

            if (status) {
                products = products.filter(x => {
                    return x.status.toString().indexOf(status.toString()) != -1
                })
            }
            return products;
        }

    }

}
