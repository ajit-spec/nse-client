import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Service2Service} from '../../../services/service2.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../register/register.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  emailSent: boolean;

  prop2: Service2Service;
  errormsg: string;
  showerror: boolean;
  dialog: MatDialog;


  constructor(param2: FormBuilder, param1: Service2Service, param3: MatDialog) {
    this.formBuilder = param2;
    this.prop2 = param1;
    this.dialog = param3;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '50%',
      data: {
        message: 'We have sent a new password to your registered email address'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  onSubmit(): void {

    const data = {
      email: this.form.get('email').value,
      contact: this.form.get('contact').value,
      action: 'change_password',
      sub_action: 'forgot_password'
    };

    this.prop2.forgotpassword(data).subscribe(value => {
      this.prop2.setforgotpassworddata(value);
      if (value.status === 1) {
        this.showerror = false;
        this.openDialog();
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


@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.html',
  styleUrls: ['./forgot-password-dialog.scss']
})
export class ForgotPasswordDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
