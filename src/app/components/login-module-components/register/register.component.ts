import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CustomValidators} from '../../../custom-validators';
import {Service2Service} from '../../../services/service2.service';
import {Service3Service} from '../../../services/service3.service';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;

  prop1: Service2Service;

  dialog: MatDialog;

  prop3: Service3Service;
  errormsg: string;
  showerror: boolean;

  constructor(param1: FormBuilder, param2: MatDialog, param3: Service2Service, param4: Service3Service) {
    this.formBuilder = param1;
    this.dialog = param2;
    this.prop1 = param3;
    this.prop3 = param4;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        CustomValidators.validemal(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, {notvalidemail: true})
      ])],
      contact: ['', Validators.compose([
        Validators.required,
        CustomValidators.validcontactno(/^((\\+91-?)|0)?[0-9]{10}$/, {notvalidcontactno: true})
      ])],
      category: ['', Validators.compose([
        Validators.required
      ])]
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SendPasswordDialogComponent, {
      width: '50%',
      data: {
        message: 'We have sent a password to your registered email address'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  onSubmit(): void {

    const registeruser = {
      name: this.form.get('name').value.trim(),
      email: this.form.get('email').value.trim(),
      contact: this.form.get('contact').value.trim(),
      category: this.form.get('category').value.trim(),
      action: 'client_registration'
    };

    this.prop1.register(registeruser).subscribe(value => {
      this.prop1.setregisteruserdata(value);
      if (value.status === 1) {
        this.showerror = false;
        this.openDialog();
      } else {
        this.showerror = true;
        setTimeout(() => {
          this.showerror = false;
        }, 3000);
        this.errormsg = value.msg;
      }

    }, error => {
      console.log(`error -> ${error}`);
    });

  }

}


@Component({
  selector: 'app-send-password-dialog',
  templateUrl: './send-password-dialog.html',
  styleUrls: ['./send-password-dialog.scss']
})
export class SendPasswordDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SendPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
