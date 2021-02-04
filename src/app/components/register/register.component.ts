import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CustomValidators} from '../../custom-validators';
import {Animations} from '../../animations';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    Animations.fadeIn
  ],
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;

  dialog: MatDialog;

  constructor(param1: FormBuilder, param2: MatDialog) {
    this.formBuilder = param1;
    this.dialog = param2;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required,
        CustomValidators.validemal(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, {notvalidemail: true})
      ])],
      contact: ['', Validators.compose([
        Validators.required,
        CustomValidators.validcontactno(/^((\\+91-?)|0)?[0-9]{10}$/, {notvalidcontactno: true})
      ])],
      category: ['individual', Validators.compose([
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
    this.openDialog()
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
