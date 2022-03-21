import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson12-Routing';

  constructor(
    public routerService: Router
  ){

  }

  navigate(url:string){
    // this.routerService.navigate([url]);
    this.routerService.navigateByUrl(url)
  }

}
