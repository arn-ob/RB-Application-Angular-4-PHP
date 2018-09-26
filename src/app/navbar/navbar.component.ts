import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SqlService } from '../service/sql/sql.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }


  checkLogin() {
    if (this.cookie.get('login') === '1') {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    if (this.cookie.get('Admin') === '1') {
      return true;
    } else {
      return false;
    }
  }

  isAccount() {
    if (this.cookie.get('Account') === '1') {
      return true;
    } else {
      return false;
    }
  }

  isPrint() {
    if (this.cookie.get('Print') === '1') {
      return true;
    } else {
      return false;
    }
  }
}
