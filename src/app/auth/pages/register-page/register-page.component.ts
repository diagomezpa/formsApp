import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  cantBeStrider,
  emailPattern,
  firstNameAndLastnamePattern,
} from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidator } from '../../../shared/validators/email.validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.validatorsService.firstNameAndLastnamePattern
          ),
        ],
        // primero dispara los validadores sincronos
      ],
      // email: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern(this.validatorsService.emailPattern),
      //   ],
      //   [new EmailValidator()],
      // ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorsService.cantBeStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        // validaciones al nivel de todo el formulario tenemos acceso a todos los controles del mismo es para validar dos campos al tiempo o mas

        this.validatorsService.isFieldOneEqualFiealTwo('password', 'password2'),
      ],
    }
  );
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField(field: string) {
    // Todo: obtener la validación desde un servicio

    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
