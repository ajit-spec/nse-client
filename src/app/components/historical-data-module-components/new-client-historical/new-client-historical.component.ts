import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-client-historical',
  templateUrl: './new-client-historical.component.html',
  styleUrls: ['./new-client-historical.component.scss']
})
export class NewClientHistoricalComponent implements OnInit {

  user = {
    name: 'emma',
    phone: {
      ph1: 1234567890,
      ph2: null
    },
    address: 'andheri',
    country: 'india',
    state: 'maharashtra',
    email: 'emma@gmail.com',
    category: 'individual',
    organization: 'quantsapp',
    gst: 'kdakdaskdhaskd',
    focheck: true,
    cmcheck: true,
    greekcheck: true,
    fodtf: '60sec',
    cmdtf: 'sec',
    greekdtf: 'tick',
    paymentDate: new Date(),
    paymentType: 'INR',
    paymentAmt: 2000,
    'utr/swift-details': '002',
    documentType: 'agreement'
  };

  form: FormGroup;
  formBuilder: FormBuilder;

  isVerified: boolean;
  router: Router;

  constructor(param1: FormBuilder, param2: Router) {
    this.formBuilder = param1;
    this.router = param2;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: [{
        value: this.user.name ?? '-',
        disabled: false
      }],
      email: [{
        value: this.user.email ?? '-',
        disabled: false
      }],
      category: [{
        value: this.user.category ?? '-',
        disabled: false
      }],
      organization: [{
        value: this.user.organization ?? '-',
        disabled: false
      }],
      gst: [{
        value: this.user.gst ?? '-',
        disabled: false
      }],
      contact: [{
        value: this.user.phone.ph1 ?? '-',
        disabled: false
      }],
      altContact: [{
        value: this.user.phone.ph2 ?? '-',
        disabled: false
      }],
      state: [{
        value: this.user.state ?? '-',
        disabled: false
      }],
      country: [{
        value: this.user.country ?? '-',
        disabled: false
      }],
      address: [{
        value: this.user.address ?? '-',
        disabled: false
      }],
      focheck: [{
        value: this.user.focheck,
        disabled: false
      }],
      cmcheck: [{
        value: this.user.cmcheck,
        disabled: false
      }],
      greekcheck: [{
        value: this.user.greekcheck,
        disabled: false
      }],
      fodtf: [{
        value: this.user.fodtf,
        disabled: false
      }],
      cmdtf: [{
        value: this.user.cmdtf,
        disabled: false
      }],
      greekdtf: [{
        value: this.user.greekdtf,
        disabled: false
      }],
      paymentDate: [{
        value: this.user.paymentDate,
        disabled: false
      }],
      paymentType: [{
        value: this.user.paymentType,
        disabled: false
      }],
      paymentAmt: [{
        value: this.user.paymentAmt,
        disabled: false
      }],
      'utr/swift-details': [{
        value: this.user['utr/swift-details'],
        disabled: false
      }],
      documentType: [{
        value: this.user.documentType,
        disabled: false
      }],
      uploadFile: [{
        value: '',
        disabled: false
      }
      ]

    });

  }

  enableField(): void {

    this.isVerified = true;
    this.form.get('fofeedstartdate').enable();
    this.form.get('foinvoiceno').enable();
    this.form.get('cmfeedstartdate').enable();
    this.form.get('cminvoiceno').enable();
    this.form.get('greeksfeedstartdate').enable();
    this.form.get('greeksinvoiceno').enable();


  }

  onSubmit(): void {
    this.router.navigate(['/client', 'confirm']);
  }

}
