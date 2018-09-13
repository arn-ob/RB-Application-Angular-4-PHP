import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-entry',
  templateUrl: './account-entry.component.html',
  styleUrls: ['./account-entry.component.css']
})
export class AccountEntryComponent implements OnInit {

  billNo: any;
  clientDetails;
  oderList: { [k: string]: any } = {};
  checkAuto: any;
  systemLoad = false;

  // Billing System
  amount: any;
  advance: any;
  due: any;
  balance: any;
  prevPay = false;
  isStored = false;
  tableLoading = false;

  // type Price
  pvc = 15;
  pana = 15;

  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private message: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.billNo = this.cookie.get('billno');
    this.get_bill_info();
    this.get_client_info();
  }

  get_client_info() {
    const Temp_store = { 'billNo': this.billNo };
    this.sql.postRequest('accountEntry/getClientDetails.php', Temp_store).subscribe(
      response => {
        this.clientDetails = response.json()[0];
        // console.log(this.clientDetails);
        this.systemLoad = true;
      },
      err => {
        console.log(err);
      });
  }

  get_bill_info() {
    const Temp_store = { 'billNo': this.billNo };
    this.sql.postRequest('accountEntry/getAccountDetails.php', Temp_store).subscribe(
      response => {
        this.oderList = response.json();
        // console.table(this.oderList);
        const adv = response.json()[0].advance;
        if (Number(adv) > 0 ) {
          this.prevPay = true;
          this.isStored = true;
        } else {
          this.calculate_total();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  // calculate total amount
  calculate_total() {
    let cal = 0;
    const ob: { [k: string]: any } = this.oderList;
    for (let i = 0; i < this.oderList.length; i++) {
      cal = (Number(ob[i].sft) * Number(ob[i].quantity) * Number(ob[i].PricePerSft)) + Number(ob[i].optionalPrice) + cal;
      // console.log(cal);
    }
    this.amount = cal;
    this.due = cal;
    this.tableLoading = true;
    // console.log(cal);
  }

  // calculate advace
  advance_cal(val) {
    if (this.amount < val) {
      this.advance = 'Invalid Amount';
      this.due = 'Invalid Amount';
    } else {
      this.advance = val;
      this.due = this.amount - val;
    }
  }

  // Event Triger from table
  setPrice(i, val, index) {
    if (!this.prevPay) {
      this.oderList[i].PricePerSft = val;
      this.calculate_total();
      this.updateSftPriceValue(val, Number(index));
      // console.table(this.oderList);
    } else {
      this.message.add({ severity: 'error', summary: 'Error Message', detail: 'All Ready Entry' });
    }
  }

  // calculate option price
  setOPPrice(i, val, index) {
    if (!this.prevPay) {
      this.oderList[i].optionalPrice = val;
      this.calculate_total();
      this.updateOpValue(val, Number(index));
      // console.table(this.oderList);
    } else {
      this.message.add({ severity: 'error', summary: 'Error Message', detail: 'All Ready Entry' });
    }
  }

   // calculate option price
   setQNTPrice(i, val, index) {
    if (!this.prevPay) {
      this.oderList[i].quantity = val;
      this.calculate_total();
      this.updateQNTValue(val, Number(index));
      // console.table(this.oderList);
    } else {
      this.message.add({ severity: 'error', summary: 'Error Message', detail: 'All Ready Entry' });
    }
  }

  // Event Triger From Storage
  make_data_store() {
    // this.advance = 0;
    for (let i = 0; i < this.oderList.length; i++) {
      const ob: { [k: string]: any } = this.oderList;
      const temp = this.make_ammount(ob[i].PricePerSft, ob[i].id);
      this.store_to_db(temp);
      // console.log(i);
    }
  }

  // create a amount array
  make_ammount(type, AIid) {
    if (this.advance === undefined) {
      this.advance = '0';
    }
    const temp = {
      'billNo': this.billNo,
      'AIid': AIid,
      'pricePerSft': type,
      'amount': this.amount,
      'advance': this.advance,
      'due': this.due
    };
    return temp;
  }


  // SQL Function
  store_to_db(val) {
    console.log(val);
    // store the db procedure
    this.sql.postRequest('accountEntry/storeUpdateAccount.php', val).subscribe(
      response => {
        // console.log(response);
        if (response.json()[0].status === 'Done') {
          // add here is ok Button
          this.tableLoading = false;
          this.isStored = true;
          this.prevPay = true;
          this.message.add({ severity: 'success', summary: 'Success', detail: 'Account Entry Success' });
        } else {
          this.message.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to Store' });
        }

      },
      err => {
        console.log(err);
      });
  }

  // update stp price
  updateSftPriceValue(price, index) {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'UPDATE account SET account.PricePerSft ="' + price + '" WHERE account.BillNo = "' + this.billNo + '" and account.AIid = "' + index + '"' };
    this.sql.postRequest('anySql/anySql.php', sql).subscribe(
      response => {
        // console.log(response.json());
        if (response.json()[0].status === 'Done') {
          this.message.add({ severity: 'info', summary: 'Info', detail: 'Price Updated' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // update optional Price
  updateOpValue(price, index) {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'UPDATE account SET account.optionalPrice ="' + price + '" WHERE account.BillNo = "' + this.billNo + '" and account.AIid = "' + index + '"' };
    this.sql.postRequest('anySql/anySql.php', sql).subscribe(
      response => {
        // console.log(response.json());
        if (response.json()[0].status === 'Done') {
          this.message.add({ severity: 'info', summary: 'Info', detail: 'Price Updated' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // update Quantity Price
  updateQNTValue(price, index) {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'UPDATE account SET account.quantity ="' + price + '" WHERE account.BillNo = "' + this.billNo + '" and account.AIid = "' + index + '"' };
    this.sql.postRequest('anySql/anySql.php', sql).subscribe(
      response => {
        // console.log(response.json());
        if (response.json()[0].status === 'Done') {
          this.message.add({ severity: 'info', summary: 'Info', detail: 'Price Updated' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // navagate to print component
  print() {
    this.cookie.set('billno', this.billNo);
    this.router.navigate(['/print']);
  }
}
