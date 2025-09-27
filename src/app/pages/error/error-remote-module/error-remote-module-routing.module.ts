import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorRemoteModuleComponent } from './error-remote-module.component';

const routes: Routes = [
  {
    path:'',
    component:ErrorRemoteModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRemoteModuleRoutingModule { }
