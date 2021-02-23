import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Service2Service} from '../../../services/service2.service';
import {Downloadfile, Downloadfiledata, Rta, Rtaeditrequestpayload} from '../../../models/user.model';
import {CustomValidators} from '../../../custom-validators';
import {Subscription} from 'rxjs';
import {Service3Service} from '../../../services/service3.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  prop2: Service2Service;

  form: FormGroup;
  formBuilder: FormBuilder;

  isVerified: boolean;
  router: Router;
  states = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Pondicherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Tripura',
    'Uttaranchal',
    'Uttar Pradesh',
    'West Bengal'
  ];

  noorganization: boolean;
  filestream: string;
  bigfile = null;
  file: any;
  filedata: Downloadfiledata;
  subscription: Subscription;
  notvalidgst: number;
  addnewfile: boolean;

  notedited: boolean;

  errormsg: string;
  showerror: boolean;
  selectedfile: string;
  prop3: Service3Service;

  constructor(param1: FormBuilder, param2: Router, param3: Service2Service, param4: Service3Service) {
    this.formBuilder = param1;
    this.router = param2;
    this.prop2 = param3;
    this.prop3 = param4;
  }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      name: [{
        value: this.prop2.getrta()?.name ?? this.prop2.getloginuserdata()?.client_name,
        disabled: true
      }],
      email: [{
        value: this.prop2.getrta()?.email ?? this.prop2.getloginuserdata()?.email,
        disabled: true
      }],
      category: [{
        value: this.prop2.getrta()?.category ?? this.prop2.getloginuserdata()?.category,
        disabled: true
      }],
      organization: [{
        value: this.prop2.getrta()?.organization ?? '',
        disabled: false
      }],
      gst: [{
        value: this.prop2.getrta()?.gst ?? '',
        disabled: false
      }, Validators.compose([
        Validators.required
      ])
      ],
      contact: [{
        value: this.prop2.getrta()?.contact ?? this.prop2.getloginuserdata()?.contact,
        disabled: true
      }],
      altContact: [{
        value: this.prop2.getrta()?.['alt-contact'] ?? '',
        disabled: false
      }],
      state: [{
        value: this.prop2.getrta()?.state ?? 'Delhi',
        disabled: false
      },
        Validators.compose([
          Validators.required
        ])],
      country: [{
        value: 'India',
        disabled: true
      }],
      address: [{
        value: this.prop2.getrta()?.address ?? '',
        disabled: false
      }],
      focheck: [{
        value: Boolean(this.prop2.getrta()?.focheck),
        disabled: false
      }],
      cmcheck: [{
        value: Boolean(this.prop2.getrta()?.cmcheck),
        disabled: false
      }],
      greekcheck: [{
        value: Boolean(this.prop2.getrta()?.greekcheck),
        disabled: false
      }],
      fodtf: [{
        value: this.prop2.getrta()?.fodtf ?? '',
        disabled: true
      }],
      cmdtf: [{
        value: this.prop2.getrta()?.cmdtf ?? '',
        disabled: true
      }],
      greekdtf: [{
        value: this.prop2.getrta()?.greekdtf ?? '',
        disabled: true
      }],
      paymentDate: [{
        value: new Date(this.prop2.getrta()?.['payment-date']) ?? '',
        disabled: false
      },
        Validators.compose([
          Validators.required
        ])],
      paymentType: [{
        value: this.prop2.getrta()?.currency ?? '',
        disabled: false
      },
        Validators.compose([
          Validators.required
        ])],
      paymentAmt: [{
        value: this.prop2.getrta()?.['payment-amt'] ?? '',
        disabled: false
      },
        Validators.compose([
          CustomValidators.validno
        ])],
      'utr/swift-details': [{
        value: this.prop2.getrta()?.['payment-utr'] ?? '',
        disabled: false
      },
        Validators.compose([
          Validators.required
        ])],
      documentType: [{
        value: this.prop2.getrta()?.['file-category'] ?? '',
        disabled: false
      },
        Validators.compose([
          Validators.required
        ])],
      uploadFile: [{
        value: '',
        disabled: false
      },
        Validators.compose([
          Validators.required
        ])
      ]

    });

    if (this.prop2.getrta()) {
      this.selectedfile = this.prop2.getrta()?.['file-name'];
    }

    this.form.get('altContact').valueChanges.subscribe(value => {
      const regex1 = /^((\\+91-?)|0)?[0-9]{10}$/;

      if (value !== '-') {
        if (!value.match(regex1)) {
          this.form.get('altContact').setValidators([
            Validators.required,
            CustomValidators.validcontactno(/^((\\+91-?)|0)?[0-9]{10}$/, {notvalidcontactno: true})
          ]);
          this.form.get('altContact').updateValueAndValidity();
        } else {
          this.form.get('altContact').clearValidators();
          this.form.get('altContact').updateValueAndValidity();

        }
      }


    });


    const data1: Rtaeditrequestpayload = {
      email: this.prop2.getloginuserdata()?.email,
      token: this.prop2.getloginuserdata()?.token,
      action: 'get_details'
    };

    console.log(data1);

    this.prop2.editrtadetails(data1).subscribe(value => {
      this.prop2.seteditrtadetailsdata(value);
      console.log(value);

      if (value.approval_status === 'Data Uploaded') {
        // this.form = this.formBuilder.group({
        //   name: [{
        //     value: this.prop2.geteditrtadetailsdata()?.client_name ?? '-',
        //     disabled: true
        //   }],
        //   email: [{
        //     value: this.prop2.geteditrtadetailsdata()?.email ?? '-',
        //     disabled: true
        //   }],
        //   category: [{
        //     value: this.prop2.geteditrtadetailsdata()?.category ?? '-',
        //     disabled: true
        //   }],
        //   organization: [{
        //     value: this.prop2.geteditrtadetailsdata()?.organization ?? '-',
        //     disabled: false
        //   }],
        //   gst: [{
        //     value: (this.prop2.geteditrtadetailsdata()?.gst ?? '-'),
        //     disabled: false
        //   }, Validators.compose([
        //     Validators.required
        //   ])
        //   ],
        //   contact: [{
        //     value: this.prop2.geteditrtadetailsdata()?.contact ?? '-',
        //     disabled: true
        //   }],
        //   altContact: [{
        //     value: this.prop2.geteditrtadetailsdata()?.['alt-contact'] ?? '-',
        //     disabled: false
        //   }, Validators.compose([
        //     CustomValidators.validcontactno(/^((\\+91-?)|0)?[0-9]{10}$/, {notvalidcontactno: true})
        //   ])],
        //   state: [{
        //     value: this.prop2.geteditrtadetailsdata()?.state ?? 'Delhi',
        //     disabled: false
        //   },
        //     Validators.compose([
        //       Validators.required
        //     ])],
        //   country: [{
        //     value: 'India',
        //     disabled: true
        //   }],
        //   address: [{
        //     value: this.prop2.geteditrtadetailsdata()?.address ?? '-',
        //     disabled: false
        //   }],
        //   focheck: [{
        //     value: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_fo !== '-'),
        //     disabled: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_fo === '-')
        //   }],
        //   cmcheck: [{
        //     value: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_cm !== '-'),
        //     disabled: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_cm === '-')
        //   }],
        //   greekcheck: [{
        //     value: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_greeks !== '-'),
        //     disabled: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_greeks === '-')
        //   }],
        //   fodtf: [{
        //     value: (this.prop2.geteditrtadetailsdata()?.data_type_fo === '-') ? '' : this.prop2.geteditrtadetailsdata()?.data_type_fo,
        //     disabled: false
        //   }],
        //   cmdtf: [{
        //     value: (this.prop2.geteditrtadetailsdata()?.data_type_cm === '-') ? '' : this.prop2.geteditrtadetailsdata()?.data_type_cm,
        //     disabled: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_cm === '-')
        //   }],
        //   greekdtf: [{
        //     value: (this.prop2.geteditrtadetailsdata()?.data_type_greeks === '-') ? ''
        //       : this.prop2.geteditrtadetailsdata()?.data_type_greeks,
        //     disabled: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_greeks === '-')
        //   }],
        //   paymentDate: [{
        //     value: new Date(this.prop2.geteditrtadetailsdata()?.payment_date) ?? '',
        //     disabled: false
        //   },
        //     Validators.compose([
        //       Validators.required
        //     ])],
        //   paymentType: [{
        //     value: this.prop2.geteditrtadetailsdata()?.payment_currency ?? '-',
        //     disabled: false
        //   },
        //     Validators.compose([
        //       Validators.required
        //     ])],
        //   paymentAmt: [{
        //     value: this.prop2.geteditrtadetailsdata()?.payment_amount ?? '-',
        //     disabled: false
        //   },
        //     Validators.compose([
        //       CustomValidators.validno
        //     ])],
        //   'utr/swift-details': [{
        //     value: this.prop2.geteditrtadetailsdata()?.payment_utr ?? '-',
        //     disabled: false
        //   },
        //     Validators.compose([
        //       Validators.required
        //     ])],
        //   documentType: [{
        //     value: Object.keys(this.prop2.geteditrtadetailsdata()?.docs)[0],
        //     disabled: false
        //   },
        //     Validators.compose([
        //       Validators.required
        //     ])],
        //   uploadFile: [{
        //     value: '',
        //     disabled: false
        //   }
        //   ]
        //
        // });

        this.prop3.existingfile = Object.values(this.prop2.geteditrtadetailsdata()?.docs)[0];

        console.log(value);

        this.form.patchValue({
          name: this.prop2.geteditrtadetailsdata()?.client_name ?? '-',
          email: this.prop2.geteditrtadetailsdata()?.email ?? '-',
          category: this.prop2.geteditrtadetailsdata()?.category ?? '-',
          organization: this.prop2.geteditrtadetailsdata()?.organization ?? '-',
          gst: (this.prop2.geteditrtadetailsdata()?.gst ?? '-'),
          contact: this.prop2.geteditrtadetailsdata()?.contact ?? '-',
          altContact: this.prop2.geteditrtadetailsdata()?.['alt-contact'] ?? '-',
          state: this.prop2.geteditrtadetailsdata()?.state ?? 'Delhi',
          country: 'India',
          address: this.prop2.geteditrtadetailsdata()?.address ?? '-',
          focheck: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_fo !== '-'),
          cmcheck: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_cm !== '-'),
          greekcheck: Boolean(this.prop2.geteditrtadetailsdata()?.data_type_greeks !== '-'),
          fodtf: ((this.prop2.geteditrtadetailsdata()?.data_type_fo === '-') ? '' : this.prop2.geteditrtadetailsdata()?.data_type_fo),
          cmdtf: ((this.prop2.geteditrtadetailsdata()?.data_type_cm === '-') ? '' : this.prop2.geteditrtadetailsdata()?.data_type_cm),
          greekdtf: ((this.prop2.geteditrtadetailsdata()?.data_type_greeks === '-') ? ''
            : this.prop2.geteditrtadetailsdata()?.data_type_greeks),
          paymentDate: new Date(this.prop2.geteditrtadetailsdata()?.payment_date) ?? '',
          paymentType: this.prop2.geteditrtadetailsdata()?.payment_currency ?? '-',
          paymentAmt: this.prop2.geteditrtadetailsdata()?.payment_amount ?? '-',
          'utr/swift-details': this.prop2.geteditrtadetailsdata()?.payment_utr ?? '-',
          documentType: Object.keys(this.prop2.geteditrtadetailsdata()?.docs)[0],
          uploadFile: ''
        });

        if (this.prop2.geteditrtadetailsdata()?.data_type_fo !== '-') {
          this.form.get('focheck').disable();
          this.form.get('fodtf').disable();
        }

        if (this.prop2.geteditrtadetailsdata()?.data_type_cm !== '-') {
          this.form.get('cmcheck').disable();
          this.form.get('cmdtf').disable();
        }

        if (this.prop2.geteditrtadetailsdata()?.data_type_greeks !== '-') {
          this.form.get('greekcheck').disable();
          this.form.get('greekdtf').disable();
        }

        console.log(this.form);


        const data: Downloadfile = {
          email: this.prop2.getloginuserdata()?.email,
          token: this.prop2.getloginuserdata()?.token,
          file_name: Object.values(this.prop2.geteditrtadetailsdata()?.docs)[0],
          action: 'download_file'
        };
        this.prop2.downloadfile(data).subscribe(value1 => {
          console.log(value1);
          this.filedata = value1;
          // ev.target.href = this.filedata.file_url;
          // ev.target.download = this.filedata.file_url;

          // ev.target.setAttribute('href', this.filedata.file_url);
          console.log(this.filedata.file_url);

        }, error => {
          console.log(error);
        });

        // this.form.get('uploadFile').clearValidators();
        // this.form.get('uploadFile').updateValueAndValidity();

        this.form.removeControl('uploadFile');
        console.log('1211');
      }

    });


    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;


    // this.form.patchValue({
    //   uploadFile: this.prop2.getrta()?.['file-name'] ?? ''
    // });

    this.form.get('gst').valueChanges.subscribe(value => {
      // console.log(value);

      if (value) {
        if (!value.match(regex)) {
          this.notvalidgst = 1;
          console.log(this.notvalidgst);
        } else {
          this.notvalidgst = 0;
        }
      }


    });


    this.form.get('focheck').valueChanges.subscribe(value => {

      if (value) {
        console.log(value);
        this.form.get('fodtf').enable();
        this.form.get('fodtf').setValidators([
          Validators.required
        ]);
        this.form.get('fodtf').updateValueAndValidity();
      } else {
        this.form.get('fodtf').disable();
        this.form.patchValue({
          fodtf: ''
        });
        this.form.get('fodtf').clearValidators();
        this.form.get('fodtf').updateValueAndValidity();
      }
    });

    this.form.get('cmcheck').valueChanges.subscribe(value => {
      if (value) {
        this.form.get('cmdtf').enable();
        this.form.get('cmdtf').setValidators([
          Validators.required
        ]);
        this.form.get('cmdtf').updateValueAndValidity();
      } else {
        this.form.get('cmdtf').disable();
        this.form.patchValue({
          cmdtf: ''
        });
        this.form.get('cmdtf').clearValidators();
        this.form.get('cmdtf').updateValueAndValidity();
      }
    });

    this.form.get('greekcheck').valueChanges.subscribe(value => {
      if (value) {
        this.form.get('greekdtf').enable();
        this.form.get('greekdtf').setValidators([
          Validators.required
        ]);
        this.form.get('greekdtf').updateValueAndValidity();
      } else {
        this.form.get('greekdtf').disable();
        this.form.patchValue({
          greekdtf: ''
        });
        this.form.get('greekdtf').clearValidators();
        this.form.get('greekdtf').updateValueAndValidity();

      }
    });


    this.noorganization = this.prop2.getloginuserdata()?.category !== 'individual';

    if (this.noorganization) {
      this.form.get('organization').setValidators([
        Validators.required
      ]);
      this.form.get('gst').setValidators([
        Validators.required
      ]);
      this.form.get('organization').updateValueAndValidity();
      this.form.get('gst').updateValueAndValidity();
    } else {
      this.form.get('organization').clearValidators();
      this.form.get('organization').updateValueAndValidity();
      this.form.get('gst').clearValidators();
      this.form.get('gst').updateValueAndValidity();
    }


  }

  addcontrolfileinput(): void {
    this.addnewfile = true;
    // this.form.get('uploadFile').setValidators([
    //   Validators.required
    // ]);
    // this.form.get('uploadFile').updateValueAndValidity();

    this.form.addControl('uploadFile', new FormControl('', [Validators.required]));
  }

  onSubmit(): void {

    console.log(this.form);

    const data: Rta = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      category: this.form.get('category').value,
      contact: this.form.get('contact').value,
      'alt-contact': this.form.get('altContact').value,
      organization: this.form.get('organization').value,
      gst: this.form.get('gst').value,
      country: this.form.get('country').value,
      state: this.form.get('state').value,
      address: this.form.get('address').value,
      fodtf: this.form.get('fodtf').value,
      cmdtf: this.form.get('cmdtf').value,
      greekdtf: this.form.get('greekdtf').value,
      focheck: this.form.get('focheck').value,
      cmcheck: this.form.get('cmcheck').value,
      greekcheck: this.form.get('greekcheck').value,
      'payment-date': this.form.get('paymentDate').value.toLocaleString().split(',')[0],
      'payment-utr': this.form.get('utr/swift-details').value,
      currency: this.form.get('paymentType').value,
      'payment-amt': this.form.get('paymentAmt').value,
      'file-name': this.form.get('uploadFile')?.value.split('\\')[this.form.get('uploadFile').value.split('\\').length - 1],
      'file-category': this.form.get('documentType').value,
      'market-segments': [],
      filestream: this.filestream
    };

    console.log(data);

    if (data.fodtf === 'tick' || data.fodtf === '60sec' || data.fodtf === 'sec') {
      data['market-segments'].push('fo');
    }

    if (data.cmdtf === 'tick' || data.cmdtf === '60sec' || data.cmdtf === 'sec') {
      data['market-segments'].push('cm');
    }

    if (data.greekdtf === 'tick' || data.greekdtf === '60sec' || data.greekdtf === 'sec') {
      data['market-segments'].push('greeks');
    }


    this.notedited = (JSON.stringify(data) === JSON.stringify(this.prop2.getrta()));
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(this.prop2.getrta()));
    console.log(this.notedited);


    // if (this.prop2.getrtaclientstatusdata()?.status && !this.notedited) {
    //   this.router.navigate(['/rta', 'client', 'confirm']);
    // } else if (this.prop2.getrtaclientstatusdata()?.status) {
    //   this.showerror = true;
    //   setTimeout(() => {
    //     this.showerror = false;
    //   }, 3000);
    //   this.errormsg = 'selected values are not diff from prev one';
    //   return;
    // }

    this.prop2.rta(data);

    console.log(this.form.get('uploadFile')?.value);

    this.router.navigate(['/rta', 'client', 'confirm']);


  }


  filevalue(ev): void {

    this.file = ev.target.files[0];
    console.log(this.file);
    this.selectedfile = this.file.name;

    if (this.file) {
      const reader = new FileReader();
      // reader.readAsText(file, 'UTF-8');
      reader.readAsDataURL(this.file);
      reader.onload = evt => {
        console.log((evt.target.result as string));
        console.log((evt.target.result as string).split(',')[1]);
        console.log(typeof (evt.target.result as string).split(',')[1]);

        this.filestream = (evt.target.result as string).split(',')[1];

        console.log(Math.floor(this.file.size / Math.pow(1000, 2)));
        this.bigfile = Math.floor(this.file.size / Math.pow(1000, 2)) > 7;
        console.log(this.file.size);

        // console.log(window.atob((evt.target.result as string).split(',')[1]));
        // console.log(typeof window.atob((evt.target.result as string).split(',')[1]));
      };


    }

  }


  // getfile(ev): void {
  //
  //   ev.preventDefault();
  //
  //   const data: Downloadfile = {
  //     email: this.prop2.getloginuserdata()?.email,
  //     token: this.prop2.getloginuserdata()?.token,
  //     file_name: this.prop2.getrtaclientstatusdata()?.docs[this.prop2.getrtadetailsubmit()?.file_category],
  //     action: 'download_file'
  //   };
  //   this.prop2.downloadfile(data).subscribe(value => {
  //     console.log(value);
  //     this.filedata = value;
  //     // ev.target.href = this.filedata.file_url;
  //     // ev.target.download = this.filedata.file_url;
  //
  //     // ev.target.setAttribute('href', this.filedata.file_url);
  //     console.log(this.filedata.file_url);
  //
  //   }, error => {
  //     console.log(error);
  //   });
  //
  // }


}
