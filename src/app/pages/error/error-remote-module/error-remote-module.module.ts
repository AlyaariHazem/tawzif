import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRemoteModuleRoutingModule } from './error-remote-module-routing.module';
import { ErrorRemoteModuleComponent } from './error-remote-module.component';


@NgModule({
  declarations: [
    ErrorRemoteModuleComponent
  ],
  imports: [
    CommonModule,
    ErrorRemoteModuleRoutingModule
  ]
})
export class ErrorRemoteModuleModule { }
