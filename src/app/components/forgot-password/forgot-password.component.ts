import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  emailSent: boolean;

  constructor(param2: FormBuilder) {
    this.formBuilder = param2;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      contact: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

}
