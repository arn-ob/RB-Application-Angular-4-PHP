import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  billNo: any;

  // store data from data
  clientDetails = [];
  oderList = [];
  accountDetails = [];

  // is data came for load
  isClientDataLoad = false;
  isPrintDataLoad = false;
  isAccountDataLoad = false;

  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.billNo = this.cookie.get('billno');
    this.get_client_info();
  }

  get_client_info() {
    const Temp_store = {'sql' : 'Select * From client_details where BillNo = "' + this.billNo + '" Group by BillNo'};
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Client Details Found' });
          this.clientDetails = response.json()[0];
          this.isClientDataLoad = true;
          this.get_print_info();
      },
      err => {
        console.log(err);
      });
  }

  get_print_info() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = {'sql' : 'Select * From printdetails, account where printdetails.BillNo = "' + this.billNo + '" and printdetails.AIid = account.AIid and printdetails.BillNo = account.BillNo'};
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.message.add({ severity: 'info', summary: 'Information', detail: 'Print Details Found' });
        this.oderList = response.json();
        console.log(this.oderList);
        this.isPrintDataLoad = true;
        this.get_account_info();
      },
      err => {
        console.log(err);
      });
  }

  get_account_info() {
    const Temp_store = {'sql' : 'Select * From account where BillNo = "' + this.billNo + '"'};
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.message.add({ severity: 'info', summary: 'Information', detail: 'Account Details Found' });
        this.accountDetails = response.json()[0];
        this.isAccountDataLoad = true;
      },
      err => {
        console.log(err);
      });
  }
}
