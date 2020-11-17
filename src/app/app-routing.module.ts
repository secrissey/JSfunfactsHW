import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { HilevelfunComponent } from './hilevelfun/hilevelfun.component';
import { JScreatorComponent } from './jscreator/jscreator.component';
import { PromisesComponent } from './promises/promises.component';


const routes: Routes = [
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'hilevelfun',
    component: HilevelfunComponent
  },
  {
    path: 'jscreator',
    component: JScreatorComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
