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
  isLoaded = false;
  nothingFound = true;
  HeaderMSG = 'Today Oder List';

  constructor(
    private sql: SqlService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cookieService.delete('cd');
    this.cookieService.set('cd', 'AccountViewComponent');
    this.get_today_list();
  }

  get_today_list() {
    this.HeaderMSG = 'Today Oder List';
    this.sql.getRequest('accountHistoryForAccountEntry/accountHistoryForAccountEntry.php').subscribe(
      response => {
        this.oderList = response.json();
        // console.table(this.oderList);
        if (this.oderList.length === 0) {
          this.nothingFound = true;
          console.log('nothing Found');
        } else {
        console.log(' Found');
        this.nothingFound = false;
        this.isLoaded = true;
        }
      },
      err => {
        console.log(err);
      });
  }

  get_prev_list() {
    this.HeaderMSG = 'Previous Oder List';
    this.sql.getRequest('accountHistoryForAccountEntry/accountHistoryPrev.php').subscribe(
      response => {
        this.oderList = response.json();
        // console.table(response.json());
        if (this.oderList.length === 0) {
          this.nothingFound = true;
          console.log('nothing Found');
        } else {
        console.log(' Found');
        this.nothingFound = false;
        this.isLoaded = true;
        }
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
