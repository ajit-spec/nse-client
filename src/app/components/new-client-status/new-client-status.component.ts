import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-new-client-status',
  templateUrl: './new-client-status.component.html',
  styleUrls: ['./new-client-status.component.scss']
})
export class NewClientStatusComponent implements OnInit, AfterViewInit {

  users: any[] = [
    {
      name: 'emma',
      email: 'emma@gmail.com',
      contact: '1111111111',
      uploaddate: new Date().toLocaleString(),
      marketsegment: 'fo',
      datetimeframe: 'tick',
      clientstatus: 'data uploaded'
    }
  ];
  displayedColumns: string[] = ['name', 'email', 'contact', 'uploaddate', 'marketsegment', 'datetimeframe', 'clientstatus'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  ngOnInit(): void {

    if (this.users.length > 0) {
      this.dataSource = new MatTableDataSource<any>(this.users);
    }

  }

}
