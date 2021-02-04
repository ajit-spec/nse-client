import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-client-confirm',
  templateUrl: './new-client-confirm.component.html',
  styleUrls: ['./new-client-confirm.component.scss']
})
export class NewClientConfirmComponent implements OnInit {

  userdetails = {
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
    paymentutr: '002',
    docType: 'agreement',
    docname: 'file1',
    marketsegments: ['fo']
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
