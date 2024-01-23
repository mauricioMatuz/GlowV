import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PaswwordModule } from './paswword/paswword.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PaswwordModule,
    SelectModule,
  ],
  exports: [InputModule, FormFieldModule, PaswwordModule, SelectModule],
})
export class ControlsModule {}
