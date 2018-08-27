import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(
    private sql: SqlService,
    private message: MessageService,
    private router: Router,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.username === undefined || this.password === undefined) {
      this.message.add({ severity: 'error', summary: 'Login Failed', detail: 'Check Username and Password' });
    } else {
      if (this.username === 'admin' && this.password === 'admin') {
        this.cookie.set('login', '1');
        this.router.navigate(['/index']);
      } else {
        this.message.add({ severity: 'error', summary: 'Login Failed', detail: 'Check Username and Password' });
      }
    }
  }
}
