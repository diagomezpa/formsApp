import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  // esta es una forma de crear formulario
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('',[]), // 1 valor por defecto 2 validaciones sincronos, 3 validaciones asincronas
  //   price: new FormControl(0,),
  //   inStorage: new FormControl(0),
  // });

  // creando el mismo form con formbuilder puede escoger la primera o la segunda

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0],
  });
  constructor(private fb: FormBuilder) {}

  onSave(): void {
    if (this.myForm.invalid) return;
    console.log(this.myForm.value);
  }
}
