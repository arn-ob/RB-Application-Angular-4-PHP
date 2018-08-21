import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { MessageService } from 'primeng/components/common/messageservice';

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

  isResultDataLoad = false;
  isResultFoundDate = false;

  // Def sql Props
  // tslint:disable-next-line:max-line-length
  sqlAtSelectDef_bill = 'account.BillNo, account.amount, account.advance, sum(account.Due) as Due, client_details.name, client_details.address, client_details.phoneNo1, client_details.phoneNo2, client_details.PartyName, GROUP_CONCAT(printdetails.FileName) as fileName, GROUP_CONCAT(printdetails.PrintType) as type, sum(printdetails.wide) as totalPrintWide, SUM(printdetails.height) as totalPrintHeight, SUM(printdetails.sft) as totalSft, sum(printdetails.quantity) as totalQuantity, printdetails.CreatedTime, printdetails.CreatedDate';
  // tslint:disable-next-line:max-line-length
  sqlAfterWhereDef_bill = 'and account.BillNo = client_details.BillNo and account.BillNo = printdetails.BillNo and client_details.BillNo = printdetails.BillNo and account.AIid = client_details.AIid and account.AIid = printdetails.AIid and client_details.AIid = printdetails.AIid';

  // tslint:disable-next-line:max-line-length
  sqlAtSelectDef_date = 'account.BillNo, account.amount, account.advance, account.Due, client_details.name, client_details.address, client_details.phoneNo1, client_details.phoneNo2, client_details.PartyName,printdetails.PrintType, printdetails.FileName, printdetails.wide as totalPrintWide, printdetails.height as totalPrintHeight, printdetails.sft as totalSft, printdetails.quantity as totalQuantity, printdetails.CreatedTime, printdetails.CreatedDate';
  // tslint:disable-next-line:max-line-length
  sqlAfterWhereDef_date = 'and account.BillNo = client_details.BillNo and account.BillNo = printdetails.BillNo and client_details.BillNo = printdetails.BillNo and account.AIid = client_details.AIid and account.AIid = printdetails.AIid and client_details.AIid = printdetails.AIid GROUP BY account.BillNo';


  constructor(
    private sql: SqlService,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.search_by_bill('67ff6a7086d261dc943a2e7338ca6ab8');
  }

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
    const Temp_store = { 'sql': 'select ' + this.sqlAtSelectDef_bill + ' from account, printdetails, client_details where account.BillNo = "' + bil + '" ' + this.sqlAfterWhereDef_bill + '' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.table(response.json());
        this.result = response.json();
        this.isResultDataLoad = true;
        this.isResultFoundDate = true;
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  search_by_date() {
    // parsing the
    this.parseDate();

    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'select ' + this.sqlAtSelectDef_date + ' from account, printdetails, client_details where account.CreatedDate BETWEEN "' + this.d1 + '" AND "' + this.d2 + '" ' + this.sqlAfterWhereDef_date + '' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        console.log(response.json());
        this.result = response.json();
        if ( this.result.length === 0) {
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

  // Index parsing of Date
  partString(str, index) {
    if (index === 2) {
      const a = str.split('-')[index];
      return a.split('T')[0];
    }
    return str.split('-')[index];
  }

}
