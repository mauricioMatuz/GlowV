import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControllerRoutingModule } from './controller-routing.module';
import { ControllerComponent } from './controller.component';


@NgModule({
  declarations: [
    ControllerComponent
  ],
  imports: [
    CommonModule,
    ControllerRoutingModule
  ]
})
export class ControllerModule { }
