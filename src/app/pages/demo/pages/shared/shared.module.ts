import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {
  ButtonsModule,
  ControlsModule,
  PopsModule,
  SpinnerModule,
} from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
    SpinnerModule,
    PopsModule,
  ],
})
export class SharedModule {}
