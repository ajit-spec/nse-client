import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {

  @Output() openNav = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
