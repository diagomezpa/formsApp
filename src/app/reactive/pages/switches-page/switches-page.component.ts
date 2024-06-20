import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  // mi solución a la tarea
  isvaidtermsAndConditions(): boolean {
    return (
      !this.myForm.controls['termsAndConditions'].pristine &&
      !this.myForm.controls['termsAndConditions'].value
    );
  }

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value; // separamos el termino termsAndConditions y creamos con el resto una nueva persona usando el operador spread
    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);
  }
}
