import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  prop2: Router;

  form: FormGroup;
  formBuilder: FormBuilder;

  showPassword: boolean;

  constructor(param2: FormBuilder, param3: Router) {

    this.formBuilder = param2;
    this.prop2 = param3;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });


  }

  onSubmit(): void {
    const loginUser = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

  }


}
