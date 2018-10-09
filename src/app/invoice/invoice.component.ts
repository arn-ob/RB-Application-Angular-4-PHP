import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  billNo: any;
  img_link: any;

  // store data from data
  clientDetails: { [k: string]: any } = {};
  oderList: { [k: string]: any } = {};
  accountDetails: { [k: string]: any } = {};

  // is data came for load
  isLoading = false;

  pvc_price = 1;
  pana_price = 1;

  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.img_link = this.sql.url + '/RBDesktopSoft/img/RB_Texture.jpg';
    this.billNo = this.cookie.get('billno');
    this.get_client_info();
  }

  get_client_info() {
    const Temp_store = { 'sql': 'Select * From client_details where BillNo = "' + this.billNo + '" Group by BillNo' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.clientDetails = response.json()[0];
        // console.table(this.clientDetails);
        this.get_print_info();
      },
      err => {
        // console.log(err.status);
        this.message.add({ severity: 'error', summary: 'Problem!', detail: 'Check your Network or ' + err });
      });
  }

  get_print_info() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'Select * From printdetails, account where printdetails.BillNo = "1055508145d" and printdetails.BillNo = account.BillNo and printdetails.AIid = account.AIid' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.oderList = response.json();
        // console.table(this.oderList);
        this.get_account_info();
        this.isLoading = true;
      },
      err => {
        console.log(err);
      });
  }

  get_account_info() {
    const Temp_store = { 'sql': 'Select * From account where BillNo = "' + this.billNo + '"' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.accountDetails = response.json()[0];
      },
      err => {
        console.log(err);
      });
  }

  // test ping work
  ping() {
    this.sql.ping().subscribe(
      response => {
        if (response.status === 200) {
          console.log('working');
        }
      },
      err => {
        console.log('problem');
      });
  }

  printComponent() {
    window.print();
  }
}
