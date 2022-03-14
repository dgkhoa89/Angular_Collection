import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifeCycleHookComponent } from './components/life-cycle-hook/life-cycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
