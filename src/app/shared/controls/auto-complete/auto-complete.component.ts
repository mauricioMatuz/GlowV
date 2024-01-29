import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  forwardRef,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
import { Subscription, Observable, Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged, startWith, map, filter } from 'rxjs';

import { ControlItem, Value } from 'src/app/models/frontend';
export { ControlItem, Value } from 'src/app/models/frontend';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent),
      multi: true,
    },
  ],
})
export class AutoCompleteComponent
  implements OnInit, ControlValueAccessor, OnDestroy
{
  @Input() items!: ControlItem[];
  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<Value>();

  formControl = new FormControl();
  options$!: Observable<ControlItem[]>;
  private destroy = new Subject<any>();

  constructor() {}
  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  ngOnInit(): void {
    this.startAuto();
    this.initControl();
  }

  private initControl(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy), distinctUntilChanged())
      .subscribe((item) => {
        const value = typeof item === 'object' ? item.value : '';
        this.propagateChange(value);
        this.changed.emit(value);
      });
  }

  private startAuto(): void {
    this.options$ = this.formControl.valueChanges.pipe(
      startWith(''),
      filter((value) => typeof value === 'string' || typeof value === 'object'),
      map((value) => (typeof value === 'string' ? value : value.label)),
      map((label) => (label ? this.filter(label) : this.items.slice()))
    );
  }

  private filter(value: string): ControlItem[] {
    const filterValue = value.toLowerCase();
    return this.items.filter((items) =>
      items.label.toLowerCase().includes(filterValue)
    );
  }
  writeValue(value: Value): void {
    const selectedOption = this.items.find((items) => items.value === value);
    this.formControl.setValue(selectedOption);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
  }

  displayFn(item?: ControlItem): string {
    return item ? item.label : '';
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
