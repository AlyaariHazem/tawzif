import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMaintenanceComponent } from './error-maintenance.component';

const routes: Routes = [
  {
    path:'',
    component:ErrorMaintenanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorMaintenanceRoutingModule { }
