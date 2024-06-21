import { FormControl } from '@angular/forms';

export const cantBeStrider = (control: FormControl) => {
  const value: string = control.value.trim().toLowerCase();
  console.log('prueba');
  if (value === 'strider') {
    return {
      noStrider: true,
    };
  }

  return null;
};
