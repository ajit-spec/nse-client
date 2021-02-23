import {Component, OnInit} from '@angular/core';
import {Service2Service} from '../../../services/service2.service';
import {Rta, Rtaedit, Rtasubmit} from '../../../models/user.model';
import {Router} from '@angular/router';
import {Service3Service} from '../../../services/service3.service';

@Component({
  selector: 'app-new-client-confirm',
  templateUrl: './new-client-confirm.component.html',
  styleUrls: ['./new-client-confirm.component.scss']
})
export class NewClientConfirmComponent implements OnInit {

  prop2: Service2Service;
  userdetails: Rta;
  router: Router;

  errormsg: string;
  showerror: boolean;
  successmsg: string;
  showsuccess: boolean;
  prop3: Service3Service

  constructor(param2: Service2Service, param3: Router, param4: Service3Service) {
    this.prop2 = param2;
    this.router = param3;
    this.prop3 = param4
  }

  ngOnInit(): void {

    this.userdetails = this.prop2.getrta();

  }

  onSubmit(): void {

    const data: Rtasubmit = {
      token: this.prop2.getloginuserdata()?.token || '-',
      action: 'update_client_details',
      name: this.userdetails.name,
      email: this.userdetails.email,
      contact: this.userdetails.contact,
      alternate_no: this.userdetails['alt-contact'] || '-',
      category: this.userdetails.category,
      organization: this.userdetails.organization,
      address: this.userdetails.address || '-',
      country: this.userdetails.country || '-',
      state: this.userdetails.state || '-',
      gst: this.userdetails.gst || '-',
      market_segments: this.userdetails['market-segments'].join(';') || '-',
      feed_start_date_cm: '-',
      data_type_cm: this.userdetails.cmdtf || '-',
      feed_start_date_fo: '-',
      data_type_fo: this.userdetails.fodtf || '-',
      feed_start_date_greeks: '-',
      data_type_greeks: this.userdetails.greekdtf || '-',
      file_category: this.userdetails['file-category'] || '-',
      file_stream: this.userdetails.filestream || '-',
      file_name: this.userdetails['file-name'] || '-',
      payment_amount: this.userdetails['payment-amt'] || '-',
      payment_utr: this.userdetails['payment-utr'] || '-',
      payment_date: this.userdetails['payment-date'] || '-',
      currency: this.userdetails.currency || '-',
    };
    console.log(data);

    this.prop2.rtadetailsubmit(data).subscribe(value => {
      this.prop2.setrtadetailsubmitdata(value);
      if (value.status === 1) {
        this.showsuccess = true;
        setTimeout(() => {
          this.showsuccess = false;
          this.router.navigate(['/rta', 'client', 'status']);
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

    if (this.prop2.geteditrtadetailsdata()?.approval_status === 'Data Uploaded') {

      const data1: Rtaedit = {
        token: this.prop2.getloginuserdata()?.token || '-',
        action: 'edit_client',
        name: this.userdetails.name,
        email: this.userdetails.email,
        contact: this.userdetails.contact,
        alternate_no: this.userdetails['alt-contact'] || '-',
        category: this.userdetails.category,
        organization: this.userdetails.organization,
        address: this.userdetails.address || '-',
        country: this.userdetails.country || '-',
        state: this.userdetails.state || '-',
        gst: this.userdetails.gst || '-',
        market_segments: this.userdetails['market-segments'].join(';') || '-',
        data_type_cm: this.userdetails.cmdtf || '-',
        data_type_fo: this.userdetails.fodtf || '-',
        data_type_greeks: this.userdetails.greekdtf || '-',
        file_category: this.userdetails['file-category'] || '-',
        file_stream: this.userdetails.filestream || '-',
        file_name: this.userdetails['file-name'] || '-',
        payment_amount: this.userdetails['payment-amt'] || '-',
        payment_utr: this.userdetails['payment-utr'] || '-',
        payment_date: this.userdetails['payment-date'] || '-',
        currency: this.userdetails.currency || '-',
      };

      console.log(data1);

      this.prop2.editrta(data1).subscribe(value => {
        this.prop2.setrtadetailsubmitdata(value);
        if (value.status === 1) {
          this.showsuccess = true;
          setTimeout(() => {
            this.showsuccess = false;
            this.router.navigate(['/rta', 'client', 'status']).then(value1 => {
              console.log(value1);
            });
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

}
