import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifeCycleHookComponent } from './components/life-cycle-hook/life-cycle-hook.component';
import { OtherLifeCycleComponent } from './components/other-life-cycle/other-life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHookComponent,
    OtherLifeCycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
