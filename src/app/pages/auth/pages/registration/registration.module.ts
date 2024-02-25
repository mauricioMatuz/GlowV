import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormFieldModule,
  InputModule,
  PasswordModule,
} from 'src/app/shared/controls';
import { ButtonModule } from 'src/app/shared/buttons';
import { SpinnerModule } from 'src/app/shared/indicators';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    ButtonModule,
    SpinnerModule,
    ReactiveFormsModule,
  ],
})
export class RegistrationModule {}
