import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PaswwordModule } from './paswword/paswword.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputModule, FormFieldModule, PaswwordModule],
  exports: [InputModule, FormFieldModule, PaswwordModule],
})
export class ControlsModule {}
