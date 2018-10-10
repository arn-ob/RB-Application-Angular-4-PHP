import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

declare function require(url: string);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // date data
  date1: Date;
  date2: Date;
  d1 = '0';
  d2 = '0';
  result = [];
  msgForTypeAndFileName = 'Not Entry';

  // query
  filterednameSearch: any;
  nameSearch: any;

  isResultDataLoad = false;
  isResultFoundDate = false;

  // Def sql Props
  // tslint:disable-next-line:max-line-length
  sqlAtSelectDef_bill = 'account.BillNo, account.AIid as id, account.amount, account.advance, sum(account.Due) as Due, client_details.name, client_details.address, client_details.phoneNo1, client_details.phoneNo2, client_details.PartyName, GROUP_CONCAT(printdetails.FileName) as fileName, GROUP_CONCAT(printdetails.PrintType) as type, sum(printdetails.wide) as totalPrintWide, SUM(printdetails.height) as totalPrintHeight, SUM(printdetails.sft) as totalSft, sum(printdetails.quantity) as totalQuantity, printdetails.CreatedTime, printdetails.CreatedDate';
  // tslint:disable-next-line:max-line-length
  sqlAfterWhereDef_bill = 'and account.BillNo = client_details.BillNo and account.BillNo = printdetails.BillNo and client_details.BillNo = printdetails.BillNo and account.AIid = client_details.AIid and account.AIid = printdetails.AIid and client_details.AIid = printdetails.AIid GROUP BY client_details.BillNo';

  // tslint:disable-next-line:max-line-length
  sqlAtSelectDef_date = 'account.BillNo, account.AIid as id, client_details.name, client_details.address,account.Due, client_details.phoneNo1, client_details.PartyName, printdetails.FileName as fileName, printdetails.PrintType as type, printdetails.wide as totalPrintWide, printdetails.height as totalPrintHeight, printdetails.sft as totalSft, printdetails.quantity  as totalQuantity, account.amount, account.advance, printdetails.CreatedTime, printdetails.CreatedDate';
  // tslint:disable-next-line:max-line-length
  sqlAfterWhereDef_date = 'and account.BillNo = client_details.BillNo and account.BillNo = printdetails.BillNo and client_details.BillNo = printdetails.BillNo and account.AIid = client_details.AIid and account.AIid = printdetails.AIid and client_details.AIid = printdetails.AIid GROUP BY account.BillNo ORDER BY printdetails.CreatedDate DESC';

  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private router: Router,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.search_auto();
    // this.search_by_bill('67ff6a7086d261dc943a2e7338ca6ab8');
  }

  // this funtion pass date to string data
  parseDate() {
    // tslint:disable-next-line:max-line-length
    this.d1 = this.partString(this.date1.toJSON(), 0) + '/' + this.partString(this.date1.toJSON(), 1) + '/' + this.partString(this.date1.toJSON(), 2);
    // tslint:disable-next-line:max-line-length
    this.d2 = this.partString(this.date2.toJSON(), 0) + '/' + this.partString(this.date2.toJSON(), 1) + '/' + this.partString(this.date2.toJSON(), 2);

    // Check
    console.log(this.d1);
    console.log(this.d2);
  }

  search_by_bill(bil) {
    // const bil = '67ff6a7086d261dc943a2e7338ca6ab8'; // debug

    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'select ' + this.sqlAtSelectDef_bill + ' from account, printdetails, client_details where account.BillNo = "' + bil + '" ' + this.sqlAfterWhereDef_bill + ' ' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.result = response.json();
        if (response.json()[0].BillNo === null) {
          console.log('Nothing Found');
          this.isResultFoundDate = false;
        } else {
          this.isResultDataLoad = true;
          this.isResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  search_by_date() {
    // parsing the time and date
    this.parseDate();

    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'select ' + this.sqlAtSelectDef_date + ' from account, printdetails, client_details where account.CreatedDate BETWEEN "' + this.d1 + '" AND "' + this.d2 + '" ' + this.sqlAfterWhereDef_date + '' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          console.log('Nothing Found');
          this.isResultFoundDate = false;
        } else {
          this.isResultDataLoad = true;
          this.isResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }


  search_auto() {

    // tslint:disable-next-line:max-line-length
    // const Temp_store = { 'sql': 'select ' + this.sqlAtSelectDef_auto + ' from account, printdetails, client_details where ' + this.sqlAfterWhereDef_auto + '' };
    const Temp_store = { 'sql': this.parseSqlFromJSON('auto') };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          console.log('Nothing Found');
          this.isResultFoundDate = false;
        } else {
          this.isResultDataLoad = true;
          this.isResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  search_by_phnNo(val) {

    // Some how it did not work from var.
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'SELECT account.BillNo, account.AIid as id, client_details.name, client_details.address, client_details.phoneNo1, client_details.phoneNo2, client_details.PartyName, printdetails.PrintType, printdetails.wide, printdetails.height, printdetails.sft, printdetails.quantity, account.amount, account.advance, account.Due, printdetails.CreatedTime, printdetails.CreatedDate FROM account, client_details, printdetails where (client_details.phoneNo1 = "' + val + '" or client_details.phoneNo2 = "' + val + '") and client_details.BillNo = account.BillNo and printdetails.BillNo = account.BillNo and client_details.AIid = account.AIid and printdetails.AIid = account.AIid GROUP BY client_details.BillNo ORDER BY printdetails.CreatedDate DESC' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          console.log('Nothing Found');
          this.isResultFoundDate = false;
        } else {
          this.isResultDataLoad = true;
          this.isResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  search_due() {
    // Some how it did not work from var.
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': this.parseSqlFromJSON('due') };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          console.log('Nothing Found');
          this.isResultFoundDate = false;
        } else {
          this.isResultDataLoad = true;
          this.isResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  search_paid() {
    const Temp_store = { 'sql': this.parseSqlFromJSON('paid') };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          console.log('Nothing Found');
          this.isResultFoundDate = false;
        } else {
          this.isResultDataLoad = true;
          this.isResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });

  }

  // auto complete and search name from DB
  filternameSearch(event) {
    const query = event.query;
    const sql = { 'sql': 'SELECT PartyName as name, phoneNo1 FROM client_details GROUP BY phoneNo1' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).toPromise()
      .then(res => <any[]>res.json())
      .then(data => {
        this.filterednameSearch = this.filtername(query, data);
      });
  }

  filtername(query, name: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < name.length; i++) {
      const search = name[i];
      if (search.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(search);
      }
    }
    return filtered;
  }

  check() {
    if (this.nameSearch !== undefined) {
      this.search_by_phnNo(this.nameSearch.phoneNo1);
      console.log(this.nameSearch.phoneNo1);
    }
  }
  // Index parsing of Date
  partString(str, index) {
    if (index === 2) {
      const a = str.split('-')[index];
      return a.split('T')[0];
    }
    return str.split('-')[index];
  }

  // Action Button
  edit(v) {
    this.cookie.set('billno', v);
    this.router.navigate(['/edit']);
  }

  history(v) {
    this.cookie.set('billno', v);
    this.router.navigate(['/history']);
  }

  print(v) {
    this.cookie.set('billno', v);
    this.router.navigate(['/print']);
  }

  parseSqlFromJSON(value) {
    const sqlQuery = require('../search/sql.json');
    return sqlQuery[value];
  }
}
