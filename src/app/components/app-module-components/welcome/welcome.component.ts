import {Component, OnInit} from '@angular/core';
import {Service2Service} from '../../../services/service2.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  prop2: Service2Service;
  router: Router;

  constructor(param1: Service2Service, param2: Router) {
    this.prop2 = param1;
    this.router = param2;
  }

  ngOnInit(): void {
    this.prop2.resetselection();
  }

  selected(option): void {
    this.prop2.setoption(option);
    const url = `/${option}/client`;
    console.log(url);
    this.router.navigate([url]);
  }


}
