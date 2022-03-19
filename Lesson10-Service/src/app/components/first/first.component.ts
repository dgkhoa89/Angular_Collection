import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  //inject service to this class
  constructor(
    private _loggingService: LoggingService
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this._loggingService.logging();
  }


}
