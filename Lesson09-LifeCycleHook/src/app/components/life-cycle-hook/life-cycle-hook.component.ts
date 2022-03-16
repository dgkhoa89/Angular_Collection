import { Component, OnInit,Input, OnChanges,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit {

  title:string='Child'

  @Input() sumValue:number = 0;

  @Output() newItemEvent  = new EventEmitter<any>();
  addNewItem(value:any) {
    this.newItemEvent.emit(value);
  }

  countValue = 0;

  constructor() { 
    console.log('constructor ....');
  }

  ngOnInit(): void {
    console.log('ng Oninit - .....');
    
  }
  ngOnChanges(): void {
    this.countValue++;
    console.log('child - on change- count is: ' + this.countValue);
    this.addNewItem(this.countValue);
  }
  ngOnDestroy(): void {
    console.log('ng OnDestroy - .....');
  }

}
