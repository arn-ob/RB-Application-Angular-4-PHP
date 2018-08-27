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
    private cookie: CookieService,
    private router: Router,
    private sql: SqlService
  ) { }

  ngOnInit() {
  }
  logout() {
    this.sql.login = false;
    this.cookie.delete('login');
    this.router.navigate(['/']);
  }


  checkLogin() {
    if (this.sql.login) {
      return true;
    } else {
      return false;
    }
  }
}
