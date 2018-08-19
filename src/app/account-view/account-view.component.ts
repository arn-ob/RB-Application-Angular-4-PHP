import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  oderList = [];

  constructor(
    private sql: SqlService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cookieService.delete('cd');
    this.cookieService.set('cd', 'AccountViewComponent');
    this.get_list();
  }

  get_list() {
    this.sql.getRequest('accountHistoryForAccountEntry/accountHistoryForAccountEntry.php').subscribe(
      response => {
        this.oderList = response.json();
        console.table(this.oderList);
      },
      err => {
        console.log(err);
      });
  }
  enter(value) {
    this.cookieService.set('billno', value);
    this.router.navigate(['/account-entry']);
    console.log(value);
  }
}
