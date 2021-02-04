import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {

  static validemal(regexp: RegExp, error: ValidationErrors): (control: AbstractControl) => { [prop: string]: boolean } | null {

    return (control: AbstractControl): { [prop: string]: boolean } | null => {

      const email = control.value;

      if (email) {
        if (email.match(regexp)) {
          return null;
        } else {
          return error;
        }
      }

    };

  }

  static validcontactno(regexp: RegExp, error: ValidationErrors): (control: AbstractControl) => { [prop: string]: boolean } | null {

    return (control: AbstractControl): { [prop: string]: boolean } | null => {

      const contact = control.value;

      if (contact) {
        if (contact.match(regexp)) {
          return null;
        } else {
          return error;
        }
      }

    };

  }


  static validPass(param1: RegExp, error: ValidationErrors): (control: AbstractControl) => { [prop: string]: boolean } | null {

    return (control: AbstractControl): { [prop: string]: boolean } | null => {

      const password = control.value;

      if (password.match(param1)) {
        return null;
      } else {
        return error;
      }

    };

  }

  static matchPass(control: AbstractControl): void {

    const password = control.get('newpassword');
    const confirmpassword = control.get('confirmpassword');

    if (confirmpassword.value) {
      if (confirmpassword.value !== password.value) {
        confirmpassword.setErrors({
          notsame: true
        });
      }
    }

  }

}
