import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { Md5 } from 'ts-md5';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-print-request',
  templateUrl: './print-request.component.html',
  styleUrls: ['./print-request.component.css']
})
export class PrintRequestComponent implements OnInit {
  // info of html input
  AIid = 1;
  printName: any;
  name: any;
  address: any;
  phnNo1: any;
  phnNo2: any;
  partyName: any;
  printType: any;
  printStatus: any;
  wide: any;
  hight: any;
  quantity: any;
  frameAdd: any;

  // array list
  this_array = [];
  db_push_array = [];
  db_push_array_size: any;


  // form bill
  bill: any;

  // sql process error
  sqlError: false;


  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private md5: Md5,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.cookie.delete('cd');
    this.cookie.set('cd', 'PrintRequestComponent');
    this.get_array_length();
    const date = new Date();
    const md5 = new Md5();
    this.bill = this.md5.appendStr(date.toString()).end();
  }

  // add to cart list
  add_to_cart() {
    // this.get_array();
    if (this.checkEntry()) {
      this.messageService.add({ severity: 'info', summary: 'Information', detail: 'Added to list' });

      this.db_push_array.push(this.get_array());
      this.get_array_length();
      this.AIid++;

      // console.log(this.db_push_array);
      this.clear_form();
    }
  }

  // store the array to db
  store() {
    // loop at reverse order
    if (this.db_push_array.length === 0) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Nothing Found For Store' });
    } else {
      for (let i = 0; i = this.db_push_array.length; i++) {
        // console.log(this.db_push_array.length);
        const Temp_store = this.db_push_array.pop();

        // console.log(Temp_store);
        this.sql.postRequest('printRequest/printRequest.php', Temp_store).subscribe(
          response => {
            console.log(response);
            if (response.json()[0].status === 'Done') {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Stored to DB' });
            } else {
              this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Failed to Store' });
            }
          },
          err => {
            console.log(err);
          });
      }
      this.get_array_length();
    }
  }

  get_array() {
    // this will check the empty field
    const temp = {
      'AIid': this.AIid,
      'billID': this.bill,
      'printName': this.printName,
      'name': this.name,
      'address': this.address,
      'phnNo1': '0' + this.phnNo1,
      'phnNo2': '0' + this.phnNo2,
      'partyName': this.partyName,
      'printType': this.printType,
      'printStatus': this.printStatus,
      'wide': this.wide,
      'hight': this.hight,
      'quantity': this.quantity,
      'fileName': this.printName + ' ' + this.printType + ' ' + this.hight + 'x' + this.wide + 'x' + this.quantity,
      'frameAdd': this.frameAdd
    };
    return temp;
  }

  get_array_length() {
    if (this.db_push_array.length === 0) {
      this.db_push_array_size = 0;
    } else {
      this.db_push_array_size = this.db_push_array.length;
    }
  }

  clear_form() {
    this.printName = undefined;
    this.name = undefined;
    this.address = undefined;
    this.phnNo1 = undefined;
    this.phnNo2 = undefined;
    this.partyName = undefined;
    this.printType = undefined;
    this.printStatus = undefined;
    this.wide = undefined;
    this.hight = undefined;
    this.quantity = undefined;
    this.frameAdd = undefined;
  }

  delete(msg) {

    // Slice object From Array
    this.db_push_array.some(function iter(o, i, a) {
      if (o.AIid === msg) {
        a.splice(i, 1);
        return true;
      }
      return o.children && o.children.some(iter);
    });
    this.get_array_length();
  }

  CheckNetpingBeforeStore() {
    this.sql.ping().subscribe(
      response => {
        if (response.status === 200) {
          this.store();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'No Network Found' });
        }
      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'No Network Found ' + err });
      });
  }

  checkEntry() {
    if (this.printName === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Print Name Field' });
      return false;
    } else if (this.name === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Name Field' });
      return false;
    } else if (this.address === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Address Field' });
      return false;
    } else if (this.phnNo1 === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Phone Field' });
      return false;
    } else if (this.printType === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Select Print Type Field' });
      return false;
    } else if (this.printStatus === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Select Print Status Field' });
      return false;
    } else if (this.wide === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Width Field' });
      return false;
    } else if (this.hight === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Height Field' });
      return false;
    } else if (this.quantity === undefined) {
      this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Quantity Field' });
      return false;
    }  else {
      return true;
    }
  }
}
