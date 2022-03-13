import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public sortCol: string = 'name';
    public sortType: number = 1;

    public products: any[] = [
        {
            id: 1,
            name: 'Iphone',
            price: 2005
        },
        {
            id: 2,
            name: 'Samsung Galaxy',
            price: 1002
        },
        {
            id: 3,
            name: 'Macbook',
            price: 2346
        },
        {
            id: 4,
            name: 'ZenBook Lenovo',
            price: 900.12
        }
    ]

    onSort(column: string){
        this.sortCol = column;
        this.sortType = -this.sortType;        
    }   

}
