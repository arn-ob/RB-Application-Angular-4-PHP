import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-account-entry',
  templateUrl: './account-entry.component.html',
  styleUrls: ['./account-entry.component.css']
})
export class AccountEntryComponent implements OnInit {

  billNo: any;
  clientDetails;
  oderList = [];
  checkAuto: any;
  systemLoad = false;

  // Billing System
  amount: any;
  advance: any;
  balance: any;

  // type Price
  pvc = 15;
  pana = 15;

  constructor(
    private sql: SqlService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.billNo = this.cookie.get('billno');
    this.get_bill_info();
    this.get_client_info();
  }

  get_client_info() {
    const Temp_store = {'billNo' : this.billNo};
    this.sql.postRequest('accountEntry/getClientDetails.php', Temp_store).subscribe(
      response => {
          console.log(response);
          this.clientDetails = response.json()[0];
          // console.log(this.clientDetails);
          this.systemLoad = true;
      },
      err => {
        console.log(err);
      });
  }

  get_bill_info() {
    const Temp_store = {'billNo' : this.billNo};
    this.sql.postRequest('accountEntry/getAccountDetails.php', Temp_store).subscribe(
      response => {
          this.oderList = response.json();
          this.calculate_total();
      },
      err => {
        console.log(err);
      }
    );
  }

  calculate(val, type) {
    if (type === 'PVC') {
      this.pvc = val;
    }
    if (type === 'Pana') {
      this.pana = val;
    }
    this.calculate_total();
  }

  calculate_total() {
    let cal = 0;
    for (let i = 0; i < this.oderList.length; i++) {
      const ob: {[k: string]: any} = this.oderList;
      if (ob[i].PrintType === 'PVC') {
        cal =  ob[i].sft * ob[i].quantity * this.pvc + cal;
        console.log(cal);
      }
      if (ob[i].PrintType === 'Pana') {
        cal =  ob[i].sft * ob[i].quantity * this.pana + cal;
        console.log(cal);
       }
       console.log(i);
    }
    this.amount = cal;
    console.log(cal);
  }

}
