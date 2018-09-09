import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  result: any[];

  constructor(
    private sql: SqlService,
    private message: MessageService,
    private router: Router,
    private cookie: CookieService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    if (this.cookie.get('login') === '1') {
      this.confirmationService.confirm({
        message: 'Are you wanted to access as a Current User',
        accept: () => {
          this.router.navigate(['/index']);
        },
        reject: () => {
          this.cookie.deleteAll();
        }
      });
    }
  }

  login() {
    if (this.username === undefined || this.password === undefined) {
      this.message.add({ severity: 'error', summary: 'Login Failed', detail: 'Check Username and Password' });
    } else {
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'Select * from login where username = "' + btoa(this.username) + '" and password = "' + btoa(this.password) + '" limit 1' };
      console.log(sql);
      this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).subscribe(
        response => {
          this.result = response.json();
          if (this.result.length === 1) {
            this.message.add({ severity: 'success', summary: 'Login Found', detail: 'Welcome' });
            console.log('Found');
            this.cookie.set('login', '1');
            this.cookie.set(response.json()[0].role, '1');
            this.router.navigate(['/index']);
          } else {
            this.message.add({ severity: 'error', summary: 'Login Failed', detail: 'Check Username and Password' });
          }
          console.log(this.result);
        },
        err => {
          console.log(err);
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
        });
    }
  }
}
