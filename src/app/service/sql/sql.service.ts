import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SqlService {
  url_L = 'http://localhost';     // Local Requset
  url_P = 'https://rb.pktlr.xyz';     // Online // Don't Change the Domain

  postReturnJsonLink = 'phpQuery/queryArgRJson.php';
  // Set public and local URL
  // Change before Build
  url = this.url_P;

  // For All url
  url_t = this.url + '/RBDesktopSoft/storePHP/';

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

  /**
   * @function ping()
   *
   * This function is looking for is there any internet
   * Available or not
   */
  ping() {
   return this.http.get(this.url);
  }



  /**
   * postQry(sql, where)
   * @param sql 'Sql Query pass'
   * @param where 'where to query'
   */
  postQry(sql, where) {
    return this.postRequest(where, sql)
    .map((response) => response.json())
    .toPromise();
  }

   // Encode To base64
   // btoa
   // Decode to base64
   // atob

   // rb site
   // sql username
   // revolutionbd_admin
   // sql pass
   // ZNa]M[3!ufH]
}
