import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from 'src/app/shared/utils/regex';
import { ControlItem } from '../../../../models/frontend/control_item/index';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  regexErrors = regexErrors;
  items!: ControlItem[];

  constructor(private fb: FormBuilder) {
    this.isInline = true;
    this.items = [
      { label: 'uno', value: 1 },
      { label: 'dos', value: 2 },
      { label: 'tres', value: 3 },
      { label: 'cuatro', value: 4 },
      { label: 'cinco', value: 5 },
      { label: 'seis', value: 6 },
      { label: 'siete', value: 7 },
    ];
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            // Validators.minLength(4),
            // Validators.pattern(regex.password),
          ],
        },
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      date: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({ input: 'Mauricio matuz' });
  }
  onSubmit(): void {}
  organizarElemento() {
    this.isInline = !this.isInline;
  }
}
