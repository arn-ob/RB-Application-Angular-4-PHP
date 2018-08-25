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
  pana_price: any;
  pvc_price: any;


  // print Details
  resultOfPrintDetails: {[k: string]: any } = {}; // access any property from array.
  isPrintDetailsResultFoundDate = false;
  PrintType: any;
  wide: any;
  height: any;
  sft: any;
  quantity: any;
  Frame: any;

  // Account Details
  resultOfAccountDetails: {[k: string]: any } = {};
  // resultOfAccountDetailsProcess: any[];
  isAccountDetailsResultFoundDate = false;
  amount: any;
  advance: any;
  due: any;

  // view expression
  isResultDataLoad = false;
  isResultFoundDate = false;
  sftPriceGet = false;

  billNo: any;
  pvc = 15;
  pana = 15;

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
        // console.log(response.json());
        this.resultOfPrintDetails = response.json();
        // console.log(this.resultOfPrintDetails);
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
    const Temp_store = { 'sql': 'Select * From account where BillNo = "' + this.billNo + '"' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // this.resultOfAccountDetailsProcess = response.json();
        this.resultOfAccountDetails = response.json()[0];
        if (this.resultOfAccountDetails.type === 'Pana') {
          this.pana_price = this.resultOfAccountDetails.PricePerSft;
        } else {
          this.pana_price = 15;
        }
        if (this.resultOfAccountDetails.type === 'PVC') {
          this.pvc_price = this.resultOfAccountDetails.PricePerSft;
        } else {
          this.pvc_price = 15;
        }
        if (this.resultOfAccountDetails.length === 0) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Account Details Not Found' });
        } else {
          // console.log('Found');
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Account Details Found' });
          this.isAccountDetailsResultFoundDate = true;
          this.sftPriceGet = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // client date Process to DB
  changeClientInfo(v1, v2) {
    // v1 = value
    // v2 = which field

    if (v2 === 'name') {
      this.name = v1;
      const sql = { 'sql': 'UPDATE client_details SET name = "' + v1 + '" where BillNo = "' + this.billNo + '"' };
      this.universalUpdateSql(sql, 'Client Name Updated');
    }
    if (v2 === 'address') {
      this.address = v1;
      const sql = { 'sql': 'UPDATE client_details SET address = "' + v1 + '" where BillNo = "' + this.billNo + '"' };
      this.universalUpdateSql(sql, 'Client Address Updated');
    }
    if (v2 === 'phn1') {
      this.phn1 = v1;
      const sql = { 'sql': 'UPDATE client_details SET phoneNo1 = "' + v1 + '" where BillNo = "' + this.billNo + '"' };
      this.universalUpdateSql(sql, 'Client Phone No Updated');
    }
    if (v2 === 'phn2') {
      this.phn2 = v1;
      const sql = { 'sql': 'UPDATE client_details SET phoneNo2 = "' + v1 + '" where BillNo = "' + this.billNo + '"' };
      this.universalUpdateSql(sql, 'Client Phone No Updated');
    }
    if (v2 === 'partyName') {
      this.partyName = v1;
      const sql = { 'sql': 'UPDATE client_details SET PartyName = "' + v1 + '" where BillNo = "' + this.billNo + '"' };
      this.universalUpdateSql(sql, 'Client Party Name Updated');
    }
  }

  // Here will be DB insert function

  calculate(val, type) {

    if (type === 'PVC') {
      this.pvc = val;
    }
    if (type === 'Pana') {
      this.pana = val;
    }
    this.calculate_total();
  }

  // auto change and store value based on change
  // This might Be cause problem Real time Money amont change but this function
  changeValue(v1, v4, v2, v3) {
    // v1 = value
    // v4 = index of array
    // v2 = AiId
    // v3 = type

    let sql: any;
    if (v3 === 'wide') {
      this.resultOfPrintDetails[v4].wide = v1;
      const sft = this.resultOfPrintDetails[v4].wide * this.resultOfPrintDetails[v4].height;

      // tslint:disable-next-line:max-line-length
      sql = { 'sql': 'UPDATE printdetails SET wide = "' + v1 + '", sft= "' + sft + '"  where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };

      // account info update
      // tslint:disable-next-line:max-line-length
      const sql_acc = { 'sql': 'UPDATE account SET totalSFT = "' + this.sft + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
      this.universalUpdateSql(sql_acc, 'Account SFT Updated');
    }
    if (v3 === 'height') {
      this.resultOfPrintDetails[v4].height = v1;
      const sft = this.resultOfPrintDetails[v4].wide * this.resultOfPrintDetails[v4].height;

      // tslint:disable-next-line:max-line-length
      sql = { 'sql': 'UPDATE printdetails SET height = "' + v1 + '", sft= "' + sft + '"  where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };

      // account info update
      // tslint:disable-next-line:max-line-length
      const sql_acc = { 'sql': 'UPDATE account SET totalSFT = "' + this.sft + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
      this.universalUpdateSql(sql_acc, 'Account SFT Updated');
    }
    if (v3 === 'quantity') {
      this.resultOfPrintDetails[v4].quantity = v1;
      sql = { 'sql': 'UPDATE printdetails SET quantity = "' + v1 + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };

    }
    this.calculate_total();
    this.universalUpdateSql(sql, 'Print Details Updated');
    // console.table(this.resultOfPrintDetails);

    // Store To DB code
    // tslint:disable-next-line:max-line-length

  }

  calculate_total() {
    let cal = 0;
    for (let i = 0; i < this.resultOfPrintDetails.length; i++) {

      const ob: {[k: string]: any} = this.resultOfPrintDetails;

      if (this.resultOfPrintDetails[i].PrintType === 'PVC') {
        cal =  (ob[i].height * ob[i].wide * ob[i].quantity * this.pvc) + cal;
        // console.log(cal);
      }
      if (ob[i].PrintType === 'Pana') {
        cal =  (ob[i].height * ob[i].wide * ob[i].quantity * this.pana) + cal;
        // console.log(cal);
       }
    }
    this.amount = cal;
    this.due = cal - this.resultOfAccountDetails.advance;
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'UPDATE account SET amount = "' + this.amount + '",Due = "' + this.due + '" where BillNo = "' + this.billNo + '"' };
    this.universalUpdateSql(sql, 'Account Updated');

  }


  universalUpdateSql(sql, msg) {
    this.sql.postRequest('updateSql/updateSql.php', sql).subscribe(
      response => {
        // console.log(response);
        if (response.json()[0].status === 'Done') {
          this.message.add({ severity: 'info', summary: 'Information', detail: msg });
        } else {
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'Contact with Developer' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }
}
