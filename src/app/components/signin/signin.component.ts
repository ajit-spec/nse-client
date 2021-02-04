import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

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

    this.prop2.navigate(['/client'])

    const loginUser = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

  }

}
