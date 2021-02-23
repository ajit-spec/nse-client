export interface RegisterdUser {
  name: string;
  email: string;
  contact: number;
  category: string;
  action: string;
}

export interface RegisterdUserData {
  'status': number;
  'msg': string;
  'password': string;
  'display_msg': string;
}

export interface LoginUser {
  'email': string;
  'password': string;
  'action': string;
}

export interface LoginUserData {
  category: string;
  changed_password_count: string;
  client_name: string;
  client_status: string;
  contact: string;
  email: string;
  msg: string;
  status: number;
  token: number;
}

export interface ChangePassword {
  'action': string;
  'sub_action': string;
  'old_password': string;
  'new_password': string;
  'email': string;
  'token': number;
}

export interface ChangePasswordData {
  msg: string;
  status: number;
  display_msg?: string;
}

export interface ForgotPassword {
  'action': string;
  'sub_action': string;
  'email': string;
  'contact': string;
}

export interface ForgotPasswordData {
  changed_password: string;
  msg: string;
  status: number;
}


export interface Rta {
  name: string;
  email: string;
  category: string;
  contact: string;
  'alt-contact': string;
  organization: string;
  gst: string;
  country: string;
  state: string;
  address: string;
  'market-segments': string[];
  fodtf: string;
  cmdtf: string;
  greekdtf: string;
  'payment-date': Date;
  'payment-utr': string;
  currency: string;
  'payment-amt': number;
  'file-name': string;
  'file-category': string;
  focheck: boolean;
  cmcheck: boolean;
  greekcheck: boolean;
  filestream?: string;
}

export interface Rtasubmit {
  'action': string;
  'address': string;
  'alternate_no': string;
  'category': string;
  'contact': string;
  'country': string;
  'currency': string;
  'data_type_cm': string;
  'data_type_fo': string;
  'data_type_greeks': string;
  'email': string;
  'feed_start_date_cm': string;
  'feed_start_date_fo': string;
  'feed_start_date_greeks': string;
  'file_category': string;
  'file_name': string;
  'file_stream': string;
  'gst': string;
  'market_segments': string;
  'name': string;
  'organization': string;
  'payment_amount': string | number;
  'payment_date': string | Date;
  'payment_utr': string;
  'state': string;
  'token': number | string;
}

export interface Rtasubmitdata {
  status: number;
  msg: string;
}

export interface Rtaclientstatus {
  'email': string;
  'token': number;
  'action': string;

}

export interface RtaclientstatusData {
  'data_type_cm': string;
  'docs': {
    'agreement': string;
  };
  'payment_amount': string;
  'alternate_no': string;
  'client_name': string;
  'registration_date': string;
  'email': string;
  'country': string;
  'state': string;
  'market_segments': string;
  'payment_date': string;
  'approval_status': string;
  'data_type_fo': string;
  'data_type_greeks': string;
  'payment_currency': string;
  'gst': string;
  'contact': string;
  'address': string;
  'upload_date': string;
  'organization': string;
  'category': string;
  'payment_utr': string;
  'status': number;
  'msg': string;
}

export interface RtaclientstatusDatashow {
  name: string;
  email: string;
  contact: string;
  'upload-date': string;
  'market-segment': string;
  'date-time-frame': string;
  'client-status': string;
}


export interface Downloadfile {
  'token': number;
  'action': string;
  'email': string;
  'file_name': string;
}

export interface Downloadfiledata {
  status: number;
  msg: string;
  'file_stream': string;
  'file_url': string;
}

export interface Rtaedit {
  'token': number | string;
  'action': string;
  'name': string;
  'email': string;
  'contact': string;
  'alternate_no': string;
  'category': string;
  'organization': string;
  'address': string;
  'country': string;
  'state': string;
  'gst': string;
  'market_segments': string;
  'data_type_cm': string;
  'data_type_fo': string;
  'file_category': string;
  'file_stream': string;
  'file_name': string;
  'data_type_greeks': string;
  'payment_amount': string | number;
  'payment_utr': string;
  'payment_date': string | Date;
  'currency': string;
}

export interface Rtaeditrequestpayload {
  'email': string;
  'token': number;
  'action': string;
}

export interface Rtaeditdata {
  'docs': {
    'undertaking': string
  };
  'payment_amount': string;
  'alternate_no': string;
  'client_name': string;
  'registration_date': string;
  'email': string;
  'country': string;
  'state': string;
  'market_segments': string;
  'payment_date': string;
  'approval_status': string;
  'data_type_fo': string;
  'payment_currency': string;
  'gst': string;
  'contact': string;
  'address': string;
  'upload_date': string;
  'organization': string;
  'category': string;
  'payment_utr': string;
  'data_type_cm': string;
  'data_type_greeks': string;
  'status': number;
  'msg': string;
}
