import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Service2Service} from '../services/service2.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate, CanLoad {

  prop2: Service2Service;
  router: Router;

  constructor(param1: Service2Service, param2: Router) {
    this.prop2 = param1;
    this.router = param2;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !Boolean(this.prop2.getloginuserdata()?.status);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!Boolean(this.prop2.getloginuserdata()?.status)) {
      this.router.navigate(['/']);
    }

    return Boolean(this.prop2.getloginuserdata()?.status) && (Boolean((this.prop2.getchangepassworddata()?.status)) || Boolean((+this.prop2.getloginuserdata()?.changed_password_count > 0)));

  }

}
