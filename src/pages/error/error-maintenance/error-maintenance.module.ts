import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMaintenanceRoutingModule } from './error-maintenance-routing.module';
import { ErrorMaintenanceComponent } from './error-maintenance.component';


@NgModule({
  declarations: [
    ErrorMaintenanceComponent
  ],
  imports: [
    CommonModule,
    ErrorMaintenanceRoutingModule
  ]
})
export class ErrorMaintenanceModule { }
