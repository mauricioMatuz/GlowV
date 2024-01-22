import {
  Component,
  Input,
  OnInit,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type passwordType = 'password' | 'text';

@Component({
  selector: 'app-paswword',
  templateUrl: './paswword.component.html',
  styleUrls: ['./paswword.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaswwordComponent),
      multi: true,
    },
  ],
})
export class PaswwordComponent implements OnInit, ControlValueAccessor {
  public value!: string;
  public isDisabled!: boolean;
  public passwordType!: passwordType;
  @Input() placeholder!: string;
  @Input() changed = new EventEmitter<string>();

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};
  constructor() {
    this.passwordType = 'password';
  }
  ngOnInit(): void {}
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyup(event: Event): void {
    const { target } = event;
    this.value = (target as HTMLInputElement).value;
    this.propagateChange(this.value);
    this.changed.emit(this.value);
  }
  onBlur(): void {
    this.propagateTouched();
  }
  togglePassword(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
