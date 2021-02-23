import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RtaclientstatusData} from '../models/user.model';
import {Observable} from 'rxjs';
import {Service2Service} from './service2.service';

@Injectable({
  providedIn: 'root'
})
export class Service3Service implements Resolve<RtaclientstatusData> {

  prop2: Service2Service;
  existingfile: string;

  constructor(param2: Service2Service) {
    this.prop2 = param2;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RtaclientstatusData>
    | Promise<RtaclientstatusData> | RtaclientstatusData {

    return this.prop2.rtastatus({
      email: this.prop2.getloginuserdata()?.email,
      token: this.prop2.getloginuserdata()?.token,
      action: 'get_details'
    });

  }

}
