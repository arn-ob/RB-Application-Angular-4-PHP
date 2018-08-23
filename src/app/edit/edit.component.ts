import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SqlService } from '../service/sql/sql.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // client Result
  resultOfClient: any[];
  date;
  time;
  name: any;
  address: any;
  phn1: any;
  phn2: any;
  partyName: any;

  // print Details
  resultOfPrintDetails: any[];
  isPrintDetailsResultFoundDate = false;
  PrintType: any;
  wide: any;
  height: any;
  sft: any;
  quantity: any;
  Frame: any;

  // Account Details
  resultOfAccountDetails: any[];
  isAccountDetailsResultFoundDate = false;
  amount: any;
  advance: any;
  due: any;

  // view expression
  isResultDataLoad = false;
  isResultFoundDate = false;

  billNo: any;

  constructor(
    private cookie: CookieService,
    private sql: SqlService,
    private message: MessageService
  ) { }

  ngOnInit() {
    // this page was navigate from search
    this.billNo = this.cookie.get('billno');
    this.clientSQLQuery();
  }

  // Client Details Query
  clientSQLQuery() {
    const Temp_store = { 'sql': 'Select * From client_details where BillNo = "' + this.billNo + '" GROUP By BillNo' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json()[0]);
        this.date = response.json()[0].CreatedDate;
        this.time = response.json()[0].CreatedTime;
        this.resultOfClient = response.json()[0];
        if (this.resultOfClient.length === 0) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Client Details Not Found' });
        } else {
          // console.log('Found');
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Client Details Found' });
          this.isResultFoundDate = true;
          this.printDetailsSQLQuery();  // forword to req 2
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // Print Details Query
  printDetailsSQLQuery() {
    const Temp_store = { 'sql': 'Select * From printdetails where BillNo = "' + this.billNo + '"' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        console.log(response.json());
        this.resultOfPrintDetails = response.json();
        if (this.resultOfPrintDetails.length === 0) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Print Details Not Found' });
        } else {
          // console.log('Found');
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Print Details Found' });
          this.isPrintDetailsResultFoundDate = true;
          this.accountSQLQuery(); // forword to req 3
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // Account Details Query
  accountSQLQuery() {
    const Temp_store = { 'sql': 'Select * From account where BillNo = "' + this.billNo + '" GROUP BY BillNo' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        console.log(response.json()[0]);
        this.resultOfAccountDetails = response.json()[0];
        if (this.resultOfAccountDetails.length === 0) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Account Details Not Found' });
        } else {
          // console.log('Found');
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Account Details Found' });
          this.isAccountDetailsResultFoundDate = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // client date Process to DB
  setClientDate(v1, v2, v3, v4, v5) {
    if (this.name === undefined) {
      this.name = v1;
    }
    if (this.address === undefined) {
      this.address = v2;
    }
    if (this.phn1 === undefined) {
      this.phn1 = v3;
    }
    if (this.phn2 === undefined) {
      this.phn2 = v4;
    }
    if (this.partyName === undefined) {
      this.partyName = v5;
    }
    console.log(this.name);
    console.log(this.address);
    console.log(this.phn1);
    console.log(this.phn2);
    console.log(this.partyName);
    console.log(this.date);
    console.log(this.time);
  }

  // Here will be DB insert function





  // Print data process to DB
  editPrintDetails(v1, v2, v3) {
    const res: { [k: string]: any } = this.resultOfPrintDetails;
    if (this.PrintType === undefined) {
      this.PrintType = res[v3].PrintType;
    }
    if (this.wide === undefined) {
      this.wide = res[v3].wide;
    }
    if (this.height === undefined) {
      this.height = res[v3].height;
    }
    if (this.sft === undefined) {
      this.sft = res[v3].sft;
    }
    if (this.quantity === undefined) {
      this.quantity = res[v3].quantity;
    }
    if (this.Frame === undefined) {
      this.Frame = res[v3].Frame;
    }
    console.log(v1);
    console.log(v2);
    console.log(this.PrintType);
    console.log(this.wide);
    console.log(this.height);
    // this.editToDB(v1, v2);
  }

  // Here will be DB insert function
  editAccount(v1, v2, v3) {
    if (this.amount === undefined) {
      this.amount = v1;
    }
    if (this.advance === undefined) {
      this.advance = v2;
    }
    if (this.due === undefined) {
      this.due = v3;
    }
    console.log(this.amount);
    console.log(this.advance);
    console.log(this.due);
  }

  changeValue(v1, v2, v3) {
    if (v3 === 'wide') {
      this.wide = v1;
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'UPDATE printdetails SET wide = "' + v1 + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
      this.universalUpdateSql(sql);
    }
  }

  universalUpdateSql(sql) {
    this.sql.postRequest('updateSql/updateSql.php', sql).subscribe(
      response => {
        console.log(response);
        this.message.add({ severity: 'info', summary: 'Information', detail: 'Updated' });
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }
}
