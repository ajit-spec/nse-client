import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../custom-validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  emailSent: boolean;

  constructor(param2: FormBuilder) {
    this.formBuilder = param2;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      oldpassword: ['', Validators.compose([
        Validators.required
      ])],
      newpassword: ['', Validators.compose([
        Validators.required,
        CustomValidators.validPass(/[a-z]/g, {nolowercase: true}),
        CustomValidators.validPass(/[A-Z]/g, {nouppercase: true}),
        CustomValidators.validPass(/[0-9]/g, {nodigit: true}),
        CustomValidators.validPass(/[^a-zA-Z\d]/g, {nospecialchar: true}),
        Validators.minLength(8)
      ])],
      confirmpassword: ['', Validators.compose([
        Validators.required
      ])],
    }, {
      validators: CustomValidators.matchPass
    });
  }

}
