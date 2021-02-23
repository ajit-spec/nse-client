import {Component, OnInit} from '@angular/core';
import {Service1Service} from './services/service1.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Service3Service} from './services/service3.service';
import {Service2Service} from './services/service2.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app1';

  breakpointObserver: BreakpointObserver;
  prop1: Service1Service;
  prop3: Service3Service;
  prop4: Service2Service;

  router: Router;
  location: Location;

  constructor(param1: BreakpointObserver, param2: Service1Service, param3: Service3Service,
              param4: Service2Service, param5: Router, param6: Location) {
    this.breakpointObserver = param1;
    this.prop1 = param2;
    this.prop3 = param3;
    this.prop4 = param4;
    this.router = param5;
    this.location = param6;
  }

  ngOnInit(): void {

    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe(value => {
      this.prop1.isSmallScreen = value.matches;
    });


  }



}
