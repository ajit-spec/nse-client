import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Service3Service} from '../../../services/service3.service';
import {Service2Service} from '../../../services/service2.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {

  prop3: Service3Service;
  prop2: Service2Service;
  @Output() openNav = new EventEmitter();
  router: Router;

  constructor(param3: Service3Service, param2: Service2Service, param1: Router) {
    this.prop3 = param3;
    this.prop2 = param2;
    this.router = param1;
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.prop2.logout();
    this.router.navigate(['/']);

  }

}
