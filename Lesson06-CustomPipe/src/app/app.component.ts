import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public content: string = `Dublin, capital of the Republic of Ireland, 
                            is on Ireland’s east coast at the mouth of the River Liffey.
                            Its historic buildings include Dublin Castle, 
                            dating to the 13th century, and imposing St Patrick’s Cathedral, 
                            founded in 1191. City parks include landscaped St Stephen’s Green and huge Phoenix Park,
                            containing Dublin Zoo. The National Museum of Ireland explores Irish heritage and culture`;
    title = 'Lesson06-CustomPipe';

    public idFilter: string = '';
    public nameFilter: string = '';
    public statusFilter: boolean = false;

    public products: any[] = [
        {
            id: 1,
            name: 'MSI Thin G63',
            status: true
        },
        {
            id: 2,
            name: 'Dell Alienceware',
            status: false
        },
        {
            id: 3,
            name: 'HP Oman 16',
            status: true
        },
        {
            id: 4,
            name: 'Acer nitro 5',
            status: true
        },
        {
            id: 5,
            name: 'Ausu RO',
            status: false
        }
    ]

    public numbers: number[] = [2, 4, 8, 3, 1, 7];
    public sortFlag: number = 1;
    setSortType(value:number){
        this.sortFlag = value;
    }

}
