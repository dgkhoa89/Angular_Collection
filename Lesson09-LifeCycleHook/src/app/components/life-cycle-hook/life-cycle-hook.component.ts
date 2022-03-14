import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit {

  constructor() { 
    console.log('constructor ....');
    

  }

  ngOnInit(): void {
    console.log('ng Oninit - .....');
    
  }
  ngOnChange(): void {
    console.log('ng OnChange - .....');
  }
  ngOnDestroy(): void {
    console.log('ng OnDestroy - .....');
  }

}
