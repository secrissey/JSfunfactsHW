import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { JScreatorComponent } from './jscreator/jscreator.component';
import { HilevelfunComponent } from './hilevelfun/hilevelfun.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    CallbacksComponent,
    JScreatorComponent,
    HilevelfunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
