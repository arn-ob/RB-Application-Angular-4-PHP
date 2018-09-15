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
  resultOfPrintAccountDetails: { [k: string]: any } = {}; // access any property from array.
  isPrintDetailsResultFoundDate = false;
  PrintType: any;
  wide: any;
  height: any;
  sft: any;
  quantity: any;
  Frame: any;

  // Account Details
  resultOfAccountDetails: { [k: string]: any } = {};
  // resultOfAccountDetailsProcess: any[];
  isAccountDetailsResultFoundDate = false;
  amount: any;
  advance: any;
  due: any;

  // view expression
  isResultDataLoad = false;
  isResultFoundDate = false;

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
    this.message.add({ severity: 'warn', summary: 'Wait', detail: 'Working' });

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
    this.message.add({ severity: 'warn', summary: 'Wait', detail: 'Working' });

    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'Select * From printdetails, account where printdetails.BillNo = "' + this.billNo + '"  and account.BillNo = printdetails.BillNo and account.AIid = printdetails.AIid' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.resultOfPrintAccountDetails = response.json();
        // console.log(this.resultOfPrintAccountDetails);
        if (this.resultOfPrintAccountDetails.length === 0) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Print Details Not Found' });
        } else {
          // console.log('Found');
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Print Details Found' });
          this.isPrintDetailsResultFoundDate = true;
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


  // auto change and store value based on change
  // This might Be cause problem Real time Money amont change but this function
  changeValue(v1, v4, v2, v3) {
    // v1 = value
    // v4 = index of array
    // v2 = AiId
    // v3 = type

    v1 = Number(v1); // Convet Number

    if (v1 !== 0 && Number(v1)) {
      let sql: any;

      if (v3 === 'wide') {
        this.resultOfPrintAccountDetails[v4].wide = v1;
        const sft = this.resultOfPrintAccountDetails[v4].wide * this.resultOfPrintAccountDetails[v4].height;

        // tslint:disable-next-line:max-line-length
        sql = { 'sql': 'UPDATE printdetails SET wide = "' + v1 + '", sft= "' + sft + '"  where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql, 'Print Details Updated');

        // account info update
        // tslint:disable-next-line:max-line-length
        const sql_acc = { 'sql': 'UPDATE account SET totalSFT = "' + this.sft + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql_acc, 'Account SFT Updated');
      }

      if (v3 === 'height') {
        this.resultOfPrintAccountDetails[v4].height = v1;
        const sft = this.resultOfPrintAccountDetails[v4].wide * this.resultOfPrintAccountDetails[v4].height;

        // tslint:disable-next-line:max-line-length
        sql = { 'sql': 'UPDATE printdetails SET height = "' + v1 + '", sft= "' + sft + '"  where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql, 'Print Details Updated');

        // account info update
        // tslint:disable-next-line:max-line-length
        const sql_acc = { 'sql': 'UPDATE account SET totalSFT = "' + this.sft + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql_acc, 'Account SFT Updated');
      }

      if (v3 === 'quantity') {
        this.resultOfPrintAccountDetails[v4].quantity = v1;
        sql = { 'sql': 'UPDATE printdetails SET quantity = "' + v1 + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql, 'Print Details Updated');
      }

      if (v3 === 'PricePerSft') {
        this.resultOfPrintAccountDetails[v4].PricePerSft = v1;
        // tslint:disable-next-line:max-line-length
        const sql_acc = { 'sql': 'UPDATE account SET PricePerSft = "' + v1 + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql_acc, 'Account SFT Updated');
      }

      if (v3 === 'optionalPrice') {
        this.resultOfPrintAccountDetails[v4].optionalPrice = v1;
        // tslint:disable-next-line:max-line-length
        const sql_acc = { 'sql': 'UPDATE account SET optionalPrice = "' + v1 + '" where BillNo = "' + this.billNo + '" and AIid = "' + v2 + '"' };
        this.universalUpdateSql(sql_acc, 'Account SFT Updated');
      }
      this.calculate_total();

    } else {
      this.message.add({ severity: 'info', summary: 'Info', detail: 'Enter Value or its Not Store to DB' });
    }
  }

  // Recalculate the Account Info
  calculate_total() {

    let cal = 0;

    for (let i = 0; i < this.resultOfPrintAccountDetails.length; i++) {
      const ob: { [k: string]: any } = this.resultOfPrintAccountDetails;
      if (ob[i].optionalPrice === undefined) { ob[i].optionalPrice = 0; }

      // tslint:disable-next-line:max-line-length
      cal = (Number(ob[i].height) * Number(ob[i].wide) * Number(ob[i].quantity) * Number(ob[i].PricePerSft)) + Number(cal) + Number(ob[i].optionalPrice);
      // console.log(cal);
    }

    this.amount = Number(cal);
    this.due = Number(cal) - Number(this.resultOfPrintAccountDetails[0].advance);

    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'UPDATE account SET amount = "' + this.amount + '",Due = "' + this.due + '" where BillNo = "' + this.billNo + '"' };
    this.universalUpdateSql(sql, 'Account Updated');

  }

  // Due pay
  DuePay(value) {

    const amount = Number(this.resultOfPrintAccountDetails[0].amount);
    const advance = Number(this.resultOfPrintAccountDetails[0].advance);

    if (amount > Number(value)) {
      this.advance = advance + Number(value);
      const due = amount - Number(this.advance);

      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'UPDATE account SET advance = "' + this.advance + '",Due = "' + due + '" where BillNo = "' + this.billNo + '"' };
      this.universalUpdateSql(sql, 'Account Updated');

    } else {
      this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'Amount is Bigger then Value' });
    }
  }

  // Execute any SQL query
  universalUpdateSql(sql, msg) {

    this.message.add({ severity: 'warn', summary: 'Wait', detail: 'Working' });

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
