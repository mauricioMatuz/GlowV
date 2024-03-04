import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import {
  ButtonModule,
  FormFieldModule,
  InputModule,
  PasswordModule,
  SpinnerModule,
} from 'src/app/shared';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { regex, regexErrors, markFormGroupTouched } from 'src/app/shared';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../state';
import * as fromUser from '../../../../state/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    ButtonModule,
    SpinnerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loading$!: Observable<boolean | null>;
  formLogin!: FormGroup;
  regexErrors = regexErrors;
  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>) {}
  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
    this.initalizeForm();
  }
  initalizeForm() {
    this.formLogin = this.fb.group({
      email: [
        null,
        {
          updateOn: 'change',
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
          updateOn: 'change',
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern(regex.password),
            ,
          ],
        },
      ],
    });
  }

  public onSubmit(): void {
    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      const credentials: fromUser.EmailPasswordCredentials = {
        email: value.email,
        password: value.password,
      };
      this.store.dispatch(new fromUser.SignInEmail(credentials));
    } else {
      markFormGroupTouched(this.formLogin);
    }
  }
}
