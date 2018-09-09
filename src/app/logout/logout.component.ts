import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigate(['/']);
  }
}
