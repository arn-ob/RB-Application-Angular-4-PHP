import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SqlService {

  url_t = 'http://localhost/RBDesktopSoft/storePHP/';     // Local Requset
  // url_t = 'http://rb.stupidarnob.com/RBDesktopSoft/storePHP/';     // Online

  constructor(
    private http: Http
  ) { }

  // this for post reqest serve
  postRequest(Linkext, data) {

    return this.http.post(this.url_t + Linkext, data);
  }

  // this for get request serve
  getRequest(Linkext) {

    return this.http.get(this.url_t + Linkext);
  }

  ping() {
   return this.http.get('http://www.google.com');
  }

}
