import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { HilevelfunctMapComponent } from './hilevelfunct-map/hilevelfunct-map.component';
import { JScreatorComponent } from './jscreator/jscreator.component';
import { PromisesComponent } from './promises/promises.component';


const routes: Routes = [
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'hilevelfunct-map',
    component: HilevelfunctMapComponent
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
