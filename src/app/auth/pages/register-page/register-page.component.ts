import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  constructor(private fb: FormBuilder) {}

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    usernamme: ['', [Validators.required]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
  });

  isValidField() {
    // Todo: obtener la validación desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
