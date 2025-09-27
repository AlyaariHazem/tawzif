import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error-404-routing.module';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    Error404RoutingModule
  ]
})
export class Error404Module { }
