import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {
  ChangePassword,
  ChangePasswordData,
  Downloadfile,
  ForgotPassword,
  ForgotPasswordData,
  LoginUser,
  LoginUserData,
  RegisterdUser,
  RegisterdUserData,
  Rta,
  Rtaclientstatus,
  RtaclientstatusData,
  RtaclientstatusDatashow,
  Rtaedit,
  Rtaeditdata,
  Rtaeditrequestpayload,
  Rtasubmit,
  Rtasubmitdata
} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  http: HttpClient;

  loginapiurl = `https://bruk0xxia3.execute-api.ap-south-1.amazonaws.com/p/admin-console`;

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(param1: HttpClient) {
    this.http = param1;
  }

  register(user: RegisterdUser): Observable<any> {

    this.setregisteruser(user);
    return this.http.post(this.loginapiurl, user, this.requestOptions);
  }

  setregisteruser(user: RegisterdUser): void {
    localStorage.setItem('registeruser', JSON.stringify(user));
  }

  getregisteruser(): RegisterdUser {
    return JSON.parse(localStorage.getItem('registeruser'));
  }

  setregisteruserdata(data: RegisterdUserData): void {
    localStorage.setItem('registeruserdata', JSON.stringify(data));
  }

  getregisteruserdata(): RegisterdUserData {
    return JSON.parse(localStorage.getItem('registeruserdata'));
  }

  login(user: LoginUser): Observable<any> {
    this.setloginuser(user);
    return this.http.post(this.loginapiurl, user, this.requestOptions);
  }

  setloginuser(user: LoginUser): void {
    localStorage.setItem('loginuser', JSON.stringify(user));
  }

  getloginuser(): LoginUser {
    return JSON.parse(localStorage.getItem('loginuser'));
  }

  setloginuserdata(data: LoginUserData): void {
    localStorage.setItem('loginuserdata', JSON.stringify(data));
  }

  getloginuserdata(): LoginUserData {
    return JSON.parse(localStorage.getItem('loginuserdata'));
  }

  changepassword(data: ChangePassword): Observable<any> {
    this.setchangepassword(data);
    return this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  setchangepassword(data: ChangePassword): void {
    localStorage.setItem('changepassword', JSON.stringify(data));
  }

  getchangepassword(): ChangePassword {
    return JSON.parse(localStorage.getItem('changepassword'));
  }

  setchangepassworddata(data: ChangePasswordData): void {
    localStorage.setItem('changepassworddata', JSON.stringify(data));
  }

  getchangepassworddata(): ChangePasswordData {
    return JSON.parse(localStorage.getItem('changepassworddata'));
  }

  forgotpassword(data: ForgotPassword): Observable<any> {
    this.setforgotpassword(data);
    return this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  setforgotpassword(data: ForgotPassword): void {
    localStorage.setItem('forgotpassword', JSON.stringify(data));
  }

  getforgotpassword(): ForgotPassword {
    return JSON.parse(localStorage.getItem('forgotpassword'));
  }

  setforgotpassworddata(data: ForgotPasswordData): void {
    localStorage.setItem('forgotpassworddata', JSON.stringify(data));
  }

  getforgotpassworddata(): ForgotPasswordData {
    return JSON.parse(localStorage.getItem('forgotpassworddata'));
  }

  setoption(option: string): void {
    localStorage.setItem('selected', option);
  }

  getoption(): string {
    if (localStorage.getItem('selected')) {
      return localStorage.getItem('selected');
    }
  }

  resetselection(): void {
    localStorage.setItem('selected', 'none');
  }

  logout(): void {
    localStorage.clear();
    // localStorage.removeItem('loginuserdata');
    // localStorage.removeItem('selected');
    // localStorage.removeItem('loginuser');
    // localStorage.removeItem('_grecaptcha');

  }

  rta(data: Rta): void {
    this.setrta(data);
  }

  setrta(data: Rta): void {
    localStorage.setItem('rtaclientdata', JSON.stringify(data));
  }

  getrta(): Rta {
    return JSON.parse(localStorage.getItem('rtaclientdata'));
  }

  rtadetailsubmit(data: Rtasubmit): Observable<any> {
    this.setrtadetailsubmit(data);
    return this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  setrtadetailsubmit(data: Rtasubmit): void {
    localStorage.setItem('rtaclientdatasubmit', JSON.stringify(data));
  }

  getrtadetailsubmit(): Rtasubmit {
    return JSON.parse(localStorage.getItem('rtaclientdatasubmit'));
  }

  setrtadetailsubmitdata(data: Rtasubmitdata): void {
    localStorage.setItem('rtadetailsubmitdata', JSON.stringify(data));
  }

  getrtadetailsubmitdata(): Rtasubmitdata {
    return JSON.parse(localStorage.getItem('rtadetailsubmitdata'));
  }

  rtastatus(data: Rtaclientstatus): Observable<any> {
    this.setrtaclientstatus(data);
    return this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  setrtaclientstatus(data: Rtaclientstatus): void {
    localStorage.setItem('rtaclientstatus', JSON.stringify(data));
  }

  getrtaclientstatus(): Rtaclientstatus {
    return JSON.parse(localStorage.getItem('rtaclientstatus'));
  }

  setrtaclientstatusdata(data: RtaclientstatusData): void {
    localStorage.setItem('rtaclientstatusdata', JSON.stringify(data));
  }

  getrtaclientstatusdata(): RtaclientstatusData {
    return JSON.parse(localStorage.getItem('rtaclientstatusdata'));
  }

  setrtaclientstatusdatashow(data: RtaclientstatusDatashow[]): void {
    localStorage.setItem('rtaclientstatusdatashow', JSON.stringify(data));
  }

  getrtaclientstatusdatashow(): RtaclientstatusDatashow[] {
    return JSON.parse(localStorage.getItem('rtaclientstatusdatashow'));
  }

  downloadfile(data: Downloadfile): Observable<any> {
    this.setdownloadfile(data);
    return this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  setdownloadfile(data: Downloadfile): void {
    localStorage.setItem('downloadfile', JSON.stringify(data));
  }

  getdownloadfile(): Downloadfile {
    return JSON.parse(localStorage.getItem('downloadfile'));
  }

  editrta(data: Rtaedit): Observable<any> {
    this.seteditrta(data);
    return this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  seteditrta(data: Rtaedit): void {
    localStorage.setItem('editrta', JSON.stringify(data));
  }

  geteditrta(): Rtaedit {
    return JSON.parse(localStorage.getItem('editrta'));
  }

  editrtadetails(data: Rtaeditrequestpayload): Observable<any> {
    this.seteditrtadetails(data);
    return  this.http.post(this.loginapiurl, data, this.requestOptions);
  }

  seteditrtadetails(data: Rtaeditrequestpayload): void {
    localStorage.setItem('editrtadetails', JSON.stringify(data));
  }

  geteditrtadetails(): Rtaeditrequestpayload {
    return JSON.parse(localStorage.getItem('editrtadetails'));
  }

  seteditrtadetailsdata(data: Rtaeditdata): void {
    localStorage.setItem('editrtadetailsdata', JSON.stringify(data));
  }

  geteditrtadetailsdata(): Rtaeditdata {
    return JSON.parse(localStorage.getItem('editrtadetailsdata'));
  }


}
