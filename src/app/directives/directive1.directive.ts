import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Service2Service} from '../services/service2.service';
import {Router} from '@angular/router';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  @Input() option: string;
  element: ElementRef;
  prop2: Service2Service;
  @Input() pointer: any;
  router: Router;

  constructor(param1: ElementRef, param2: Service2Service, param3: Router) {
    this.element = param1;
    this.prop2 = param2;
    this.router = param3;
  }


  @HostListener('click') onClick(): void {
    this.pointer.close();
    this.prop2.setoption(this.option);
    this.router.navigate(['/', this.option, 'client']);
  }

}
