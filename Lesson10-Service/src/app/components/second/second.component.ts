import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  private _logginService : LoggingService;
  constructor(a : LoggingService) {
    this._logginService = a;
   }

  ngOnInit(): void {
  }

  onClick() {
    this._logginService.logging();
  }
}
