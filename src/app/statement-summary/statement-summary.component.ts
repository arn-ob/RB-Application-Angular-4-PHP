import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-statement-summary',
  templateUrl: './statement-summary.component.html',
  styleUrls: ['./statement-summary.component.css']
})
export class StatementSummaryComponent implements OnInit {

  btnMblNo: any;
  SUMamount: any = 0;
  SUMadvance: any = 0;
  SUMdue: any = 0;

  isfound = false;
  isClientDataLoad = false;
  isPrintDataLoad = false;
  isAccountDataLoad = false;
  isShow = false;
  isprint = false;

  resultOfClientFromDB = [];
  resultOfClientFromDBObj: { [k: string]: any } = {};

  resultOfPrintFromDB = [];
  resultOfPrintFromDBObj: { [k: string]: any } = {};

  resultOfAccountFromDB = [];
  resultOfAccountFromDBObj: { [k: string]: any } = {};

  // query
  filterednameSearch: any;
  nameSearch: any;

  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private message: MessageService
  ) { }

  ngOnInit() {
  }

  find() {
    this.isShow = true;
    if (Number(this.btnMblNo) && Number(this.btnMblNo) !== 0) {
      this.isfound = true;
      this.getClientDetailsFromDB(); // 1st step
    } else {
      this.btnMblNo = undefined;
      this.message.add({ severity: 'error', summary: 'Problem', detail: 'Enter Correct Input' });
    }
  }

  getClientDetailsFromDB() {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'Select * From client_details where phoneNo1 = "' + this.btnMblNo + '" or phoneNo2 = "' + this.btnMblNo + '"' };
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {
      if (result[0] === undefined) {

        this.message.add({ severity: 'error', summary: 'Nothing Found', detail: 'Check Number' });
        this.isfound = false;

      } else {

        this.message.add({ severity: 'success', summary: 'Client Found', detail: '' });
        if (result[0].phoneNo2 === '0') {
          result[0].phoneNo2 = 'Not Entry';
        }
        this.resultOfClientFromDB = result[0];

        // Success load, Go to next one
        this.isClientDataLoad = true;
        this.getPrintDetails(); // 2nd step

        // console.log(this.resultOfClientFromDB);
      }
    }).catch(err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
  }

  getPrintDetails() {
    const temp = [];
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'Select DISTINCT BillNo From client_details where phoneNo1 = "' + this.btnMblNo + '" or phoneNo2 = "' + this.btnMblNo + '"' };
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {

      // loop for dublicate querry and manage all the print result to one singe
      for (let i = 0; i < result.length; i++) {
        // tslint:disable-next-line:max-line-length
        const sql2 = { 'sql': 'Select * From printdetails where BillNo = "' + result[i].BillNo + '"' };
        this.sql.postQry(sql2, 'phpQuery/queryArgRJson.php').then((result2) => {
          for (let j = 0; j < result2.length; j++) {
            temp.push(result2[j]);
          }
        }).catch(err => {
          this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
        });
      }

      this.resultOfPrintFromDB = temp;
      this.isPrintDataLoad = true;
      this.getAccountDetails();  // move to 3rd part
    }).catch(err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
  }


  getAccountDetails() {
    const temp = [];
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'Select DISTINCT BillNo From client_details where phoneNo1 = "' + this.btnMblNo + '" or phoneNo2 = "' + this.btnMblNo + '"' };
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {

      // loop for dublicate querry and manage all the print result to one singe
      for (let i = 0; i < result.length; i++) {
        // tslint:disable-next-line:max-line-length
        const sql2 = { 'sql': 'Select * From account where BillNo = "' + result[i].BillNo + '" GROUP BY BillNO' };
        this.sql.postQry(sql2, 'phpQuery/queryArgRJson.php').then((result2) => {
          for (let j = 0; j < result2.length; j++) {
            temp.push(result2[j]);
          }

          // if null found
          if (result2[0].advance === '') {
            result2[0].advance = '0';
          }
          if (result2[0].amount === '') {
            result2[0].amount = '0';
          }
          if (result2[0].Due === '') {
            result2[0].Due = '0';
          }

          this.SUMamount = Number(this.SUMamount) + Number(result2[0].amount);
          this.SUMadvance = Number(this.SUMadvance) + Number(result2[0].advance);
          this.SUMdue = Number(this.SUMdue) + Number(result2[0].Due);
        }).catch(err => {
          this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
        });
      }

      this.resultOfAccountFromDB = temp;
      this.isAccountDataLoad = true;
    }).catch(err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
    // console.log(temp);
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
      this.btnMblNo = this.nameSearch.phoneNo1;
      this.find();
      // console.log(this.nameSearch.phoneNo1);
    }
  }

  print() {
    if (this.isfound !== false) {
      this.isprint = true;
      this.message.add({ severity: 'success', summary: 'Ready Print', detail: 'Press Clrt+p for Print' });
    } else {
      this.message.add({ severity: 'error', summary: 'Data Error', detail: 'Nothing Found for Print' });
    }
  }
}
