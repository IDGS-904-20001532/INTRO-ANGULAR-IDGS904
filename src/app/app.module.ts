import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela/escuela.component';
import { IvnComponent } from './ivn/ivn/ivn.component';
import { IricComponent } from './escuela/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    IvnComponent,
    IricComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
