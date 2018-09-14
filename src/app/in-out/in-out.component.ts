import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { SqlService } from '../service/sql/sql.service';
import { UUID } from 'angular2-uuid';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {
  inCash;
  outCash;
  outCashEdit;
  inCashEdit;
  role;

  // cash in Form Control
  cashInName: any;
  cashInDetails: any;
  cashInAmount: any;
  inResult = [];
  inShow = false;

  // cash out Form Control
  cashOutName: any;
  cashOutDetails: any;
  cashOutAmount: any;
  outResult = [];
  outShow = false;

  constructor(
    private message: MessageService,
    private sql: SqlService,
    private confirmationService: ConfirmationService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.role = this.cookie.get('username');
    this.ViewFromSQL('in');
    this.ViewFromSQL('out');
  }

  // Number Check
  isNumber(where) {
    if (where === 'in') {
      if (this.cashInAmount !== undefined) {
        if (!Number(this.cashInAmount)) {
          this.message.add({ severity: 'error', summary: 'Wait', detail: 'Enter Number' });
          this.cashInAmount = undefined;
        }
      }
    }
    if (where === 'out') {
      if (this.cashOutAmount !== undefined) {
        if (!Number(this.cashOutAmount)) {
          this.message.add({ severity: 'error', summary: 'Wait', detail: 'Enter Number' });
          this.cashOutAmount = undefined;
        }
      }
    }
  }


  EntryCheck(where) {
    if (where === 'in') {
      if (!this.cashInAmount || this.cashInDetails === undefined || this.cashInName === undefined) {
        this.message.add({ severity: 'error', summary: 'Check Entry', detail: 'Fill all the Entry' });
      } else {
        this.inCash = false;
        this.SQLRequest(this.cashInName, this.cashInDetails, this.cashInAmount, where);
      }
    }

    if (where === 'out') {
      if (!this.cashOutAmount || this.cashOutDetails === undefined || this.cashOutName === undefined) {
        this.message.add({ severity: 'error', summary: 'Check Entry', detail: 'Fill all the Entry' });
      } else {
        this.outCash = false;
        this.SQLRequest(this.cashOutName, this.cashOutDetails, this.cashOutAmount, where);
      }
    }
  }

  // sql request
  SQLRequest(v1, v2, v3, v4) {

    /*
    v1 = porpose
    v2 = details
    v3 = amount
    v4 = type
    */
    this.message.add({ severity: 'info', summary: 'Processing', detail: 'Sending to DB' });
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'INSERT INTO CashINOUT (entryid, porpose, details, amount, type, updateby, CreatedTime, CreatedDate) VALUES ("' + this.getRandomID() + '", "' + v1 + '", "' + v2 + '", "' + v3 + '", "' + v4 + '","' + this.cookie.get('username') + '", "' + this.geTime() + '", "' + this.geDate() + '")' };
    // console.log(sql);
    this.sql.postRequest('anySql/anySql.php', sql).subscribe(
      response => {
        // console.log(response.json());
        if (response.json()[0].status === 'Done') {
          this.message.add({ severity: 'success', summary: 'Recorded', detail: 'Store To DB' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  ViewFromSQL(where) {
    const sql = { 'sql': 'select * from CashINOUT where type = "' + where + '"' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).subscribe(
      response => {
        if (where === 'in') { this.inResult = response.json(); }
        if (where === 'out') { this.outResult = response.json(); }
        // console.log(this.inResult);
        // console.log(this.outResult);
        // cash in section
        if (this.inResult.length === 0) {
          this.inShow = false;
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'No Cash IN Result Found' });
        } else {
          this.inShow = true;
          this.message.add({ severity: 'success', summary: 'Cash IN Result ', detail: 'Showing To List' });
        }

        // Cash out Section
        if (this.outResult.length === 0) {
          this.outShow = false;
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'No Cash OUT Result Found' });
        } else {
          this.outShow = true;
          this.message.add({ severity: 'success', summary: 'Cash OUT Result', detail: 'Showing To List' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  delete(v) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this?',
      accept: () => {
        const sql = { 'sql': 'DELETE FROM CashINOUT WHERE entryid = "' + v + '"' };
        // console.log(sql);
        this.sql.postRequest('anySql/anySql.php', sql).subscribe(
          response => {
            if (response.json()[0].status === 'Done') {
              this.message.add({ severity: 'info', summary: 'Info', detail: 'Type Deleted' });
            }
          },
          err => {
            console.log(err);
            this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
          });
      },
      reject: () => {
        this.message.add({ severity: 'info', summary: 'Info', detail: 'User Deleted rejected' });
      }
    });
  }


  // time return
  geTime() {
    const date = new Date();
    let time = date.getHours() + ''; // convert number to string and it will again use as string
    if (Number(time) >= 12) {
      const pm = Number(date.getHours()) - 12;
      time = pm + ':' + date.getMinutes() + ':' + date.getSeconds() + 'pm';
    } else {
      time = time + ':' + date.getMinutes() + ':' + date.getSeconds() + 'am';
    }
    return time;
  }

  // date return
  geDate() {
    const date = new Date();
    const presentDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
    return presentDate;
  }

  getRandomID() {
    const date = new Date();
    const uuid = UUID.UUID();
    // tslint:disable-next-line:max-line-length
    const id = date.getHours().toString() + date.getMinutes().toString() + date.getMilliseconds().toString() + uuid.split('-')[2];
    return id;
  }


}
