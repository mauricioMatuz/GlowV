import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem, Value } from 'src/app/models/frontend';
export { ControlItem, Value } from 'src/app/models/frontend';
@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true,
    },
  ],
})
export class RadiosComponent implements OnInit, ControlValueAccessor {
  value!: Value;
  isDisabled!: boolean;
  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value[]>();
  private propagateChange: any = () => {};
  writeValue(obj: Value): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  ngOnInit(): void {}

  onChanged(value: Value): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit([value]);
  }
  isChecked(value: Value): boolean {
    return this.value === value;
  }
}
