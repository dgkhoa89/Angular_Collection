import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('txtName') name: ElementRef | undefined;
    
    onToggle(txtName:any,txtAddress:any){
        // console.log(txtAddress);
        // console.log(txtName);
    }

    onToggleComponent(){
        console.log(this.name?.nativeElement.value);
    }
}
