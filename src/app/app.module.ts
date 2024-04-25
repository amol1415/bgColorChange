import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorchangeComponent } from './colorchange/colorchange.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorchangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
