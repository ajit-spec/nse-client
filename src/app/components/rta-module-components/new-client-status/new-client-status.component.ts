import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RtaclientstatusData, RtaclientstatusDatashow} from '../../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {Service2Service} from '../../../services/service2.service';

@Component({
  selector: 'app-new-client-status',
  templateUrl: './new-client-status.component.html',
  styleUrls: ['./new-client-status.component.scss']
})
export class NewClientStatusComponent implements OnInit, AfterViewInit {

  users: RtaclientstatusData;
  userlists: RtaclientstatusDatashow[] = [];
  // logs: RtaclientstatusDatashow[] = [];
  displayedColumns: string[] = ['name', 'email', 'contact', 'uploaddate', 'marketsegment', 'datetimeframe', 'clientstatus'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  prop1: ActivatedRoute;
  prop2: Service2Service;

  prop3 = {
    fo: 'data_type_fo',
    cm: 'data_type_cm',
    greeks: 'data_type_greeks'
  };

  constructor(param1: ActivatedRoute, param2: Service2Service) {
    this.prop1 = param1;
    this.prop2 = param2;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  ngOnInit(): void {

    this.prop1.data.subscribe(value => {
      console.log(value);
      this.prop2.setrtaclientstatusdata(value.clientstatusdata);
      this.users = this.prop2.getrtaclientstatusdata();

      // this.userlists = this.prop2.getrtaclientstatusdatashow();

      this.prop2.getrtaclientstatusdata().market_segments.split(';').forEach(value1 => {

        const data: RtaclientstatusDatashow = {
          name: this.users.client_name,
          email: this.users.email,
          contact: this.users.contact,
          'upload-date': this.users.upload_date,
          'market-segment': value1,
          'date-time-frame': this.users[this.prop3[value1]],
          'client-status': this.users.approval_status
        };

        this.userlists.push(data);

      });

      this.prop2.setrtaclientstatusdatashow(this.userlists);

      console.log(this.userlists);

    });
    // this.logs = this.prop2.getrtaclientstatusdatashow() ?? [];
    this.dataSource = new MatTableDataSource<any>(this.userlists);


  }

}
