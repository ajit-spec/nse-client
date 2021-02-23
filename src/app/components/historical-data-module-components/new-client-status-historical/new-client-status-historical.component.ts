import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-new-client-status-historical',
  templateUrl: './new-client-status-historical.component.html',
  styleUrls: ['./new-client-status-historical.component.scss']
})
export class NewClientStatusHistoricalComponent implements OnInit {

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
