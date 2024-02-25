import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  regex,
  regexErrors,
  markFormGroupTouched,
  ButtonModule,
  FormFieldModule,
  InputModule,
  PasswordModule,
  SpinnerModule,
} from 'src/app/shared';
import { CommonModule } from '@angular/common';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../state';
import * as fromUser from '../../../../state/user';

@Component({
  selector: 'app-registration',
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    SpinnerModule,
  ],
})
export class RegistrationComponent implements OnInit {
  formRegister!: FormGroup;
  regexErrors = regexErrors;
  loading$!: Observable<boolean | null>;
  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>) {}
  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    console.log(this.loading$);
    this.loading$.subscribe((value) => {
      console.log('Valor emitido por loading$:', value);
    });
    this.initalizeForm();
  }
  private initalizeForm() {
    this.formRegister = this.fb.group(
      {
        email: [
          null,
          {
            updateOn: 'blur',
            validators: [
              Validators.required,
              Validators.maxLength(150),
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
              Validators.minLength(6),
              Validators.maxLength(30),
              Validators.pattern(regex.password),
              ,
            ],
          },
        ],
        passwordRepeat: [
          null,
          {
            updateOn: 'blur',
            validators: [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(30),
              Validators.pattern(regex.password),
            ],
          },
        ],
      },
      { validator: this.repeatPasswordValidator }
    );
  }

  private repeatPasswordValidator(
    group: FormGroup
  ): { [key: string]: boolean } | null {
    const password = group.get('password');
    const passwordRepeat = group.get('passwordRepeat');

    return passwordRepeat?.value && password?.value !== passwordRepeat?.value
      ? { repeat: true }
      : null;
  }

  onSubmit(): void {
    if (this.formRegister.valid) {
      const valute = this.formRegister.value;
      const credential: fromUser.EmailPasswordCredentials = {
        email: valute.email,
        password: valute.password,
      };
      this.store.dispatch(new fromUser.SignUpEmail(credential));
    } else {
      markFormGroupTouched(this.formRegister);
    }
  }
}
