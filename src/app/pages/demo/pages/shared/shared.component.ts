import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline!: boolean;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(4)],
        },
      ],
    });
  }

  onPatchValue(): void {
    this.form.patchValue({ input: 'Mauricio matuz' });
  }
  onSubmit(): void {
  }
  organizarElemento() {
    this.isInline = !this.isInline;
  }
}
