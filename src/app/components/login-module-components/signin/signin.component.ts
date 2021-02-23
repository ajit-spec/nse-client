import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Service2Service} from '../../../services/service2.service';
import {Service3Service} from '../../../services/service3.service';
import {MatDialog} from '@angular/material/dialog';

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
  prop3: Service2Service;
  prop4: Service3Service;
  errormsg: string;
  showerror: boolean;

  dialog: MatDialog;


  constructor(param2: FormBuilder, param3: Router, param1: Service2Service, param4: Service3Service, param5: MatDialog) {

    this.formBuilder = param2;
    this.prop2 = param3;
    this.prop3 = param1;
    this.prop4 = param4;
    this.dialog = param5;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      recaptcha: ['', Validators.compose([
        Validators.required
      ])]
    });


  }

  onSubmit(): void {


    const loginuser = {
      email: this.form.get('email').value.trim(),
      password: this.form.get('password').value.trim(),
      action: 'client_login'
    };

    this.prop3.login(loginuser).subscribe(value => {

      this.prop3.setloginuserdata(value);
      if (+value.status === 1) {
        if (+value.changed_password_count === 0) {
          this.prop2.navigate(['/login', 'change-password']);
        } else {
          this.prop2.navigate(['/welcome']);
        }
        this.showerror = false;
      } else {
        this.showerror = true;
        setTimeout(() => {
          this.showerror = false;
        }, 3000);
        this.errormsg = value.msg;
      }


    }, error => {
      console.log(error);
    });

    console.log(this.form.get('recaptcha').value);

  }

  resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  errored(): void {
    console.warn(`reCAPTCHA error encountered`);
  }

}
