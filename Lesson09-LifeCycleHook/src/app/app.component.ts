import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson09-LifeCycleHook';

  public isShowing: boolean = true;

  onToggle() {
    this.isShowing = !this.isShowing;
  }

  public sumValueParent: number = 0;

  onSummary(a: any, b: any) {
    this.sumValueParent = (+a + +b);
  }

  updateCount(value: Event){
      console.log('parent - value received from child is : ' + value);      
  }

}
