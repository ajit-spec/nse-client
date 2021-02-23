import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../../custom-validators';
import {Service2Service} from '../../../services/service2.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  emailSent: boolean;

  prop2: Service2Service;

  errormsg: string;
  showerror: boolean;

  successmsg: string;
  showsuccess: boolean;
  router: Router;
  showPassword: boolean;
  showPassword1: boolean;
  showPassword2: boolean;


  constructor(param2: FormBuilder, param1: Service2Service, param3: Router) {
    this.formBuilder = param2;
    this.prop2 = param1;
    this.router = param3;
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


  onSubmit(): void {

    const data = {
      action: 'change_password',
      sub_action: 'change_password',
      old_password: this.form.get('oldpassword').value,
      new_password: this.form.get('newpassword').value,
      email: this.prop2.getloginuserdata().email,
      token: this.prop2.getloginuserdata().token
    };

    this.prop2.changepassword(data).subscribe(value => {

      this.prop2.setchangepassworddata(value);

      if (value.status === 1) {
        this.showsuccess = true;
        setTimeout(() => {
          this.showsuccess = false;
          this.router.navigate(['/welcome']);
        }, 3000);
        this.successmsg = value.msg;
      } else {
        this.showerror = true;
        setTimeout(() => {
          this.showerror = false;
        }, 3000);
        this.errormsg = value.display_msg ?? value.msg;
      }
    }, error => {
      console.log(error);
    });


  }

}
