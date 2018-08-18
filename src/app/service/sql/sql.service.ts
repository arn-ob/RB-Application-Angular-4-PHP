import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SqlService {
  url = 'http://localhost:5000/';     // Local Requset
  url_t = 'http://localhost/RBDesktopSoft/storePHP/';     // Local Requset
  constructor(
    private http: Http
  ) { }

  // this for post reqest serve
  postRequest(Linkext, data) {
    console.log('post req');
    return this.http.post(this.url_t + Linkext, data);
  }

  // this for get request serve
  getRequest(Linkext) {
    console.log('get req');
    return this.http.get(this.url_t + Linkext);
  }
}