import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoCompleteComponent, HighlightPipe],
  imports: [CommonModule, MatAutocompleteModule, ReactiveFormsModule],
  exports: [AutoCompleteComponent],
})
export class AutoCompleteModule {}
