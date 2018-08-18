import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-print-request',
  templateUrl: './print-request.component.html',
  styleUrls: ['./print-request.component.css']
})
export class PrintRequestComponent implements OnInit {
  // info of html input
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
  fileName: any;
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
    private md5: Md5
  ) { }

  ngOnInit() {
    this.get_array_length();
    const date =  new Date();
    const md5 = new Md5();
    this.bill = this.md5.appendStr(date.toString()).end();
  }

  // add to cart list
  add_to_cart() {
    // this.get_array();
    this.db_push_array.push(this.get_array());
    this.get_array_length();
    console.log(this.db_push_array);
    // this.clear_form();
  }

  // store the array to db
  store() {
    // loop at reverse order
    console.log(this.db_push_array.length);
    for (let i = 0; i = this.db_push_array.length; i++) {
      console.log(this.db_push_array.length);
      const Temp_store = this.db_push_array.pop();

      // console.log(Temp_store);
      this.sql.postRequest('printRequest/printRequest.php', Temp_store).subscribe(
        response => {
            console.log(response);
        },
        err => {
          console.log(err);
        });
    }
  }

  get_array() {
    const temp = {
      'billID': this.bill,
      'printName': this.printName,
      'name': this.name,
      'address': this.address,
      'phnNo1': this.phnNo1,
      'phnNo2': this.phnNo2,
      'partyName': this.partyName,
      'printType': this.printType,
      'printStatus': this.printStatus,
      'wide': this.wide,
      'hight': this.hight,
      'quantity': this.quantity,
      'fileName': this.fileName,
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
    this.printName = '';
    this.name = '';
    this.address = '';
    this.phnNo1 = '';
    this.phnNo2 = '';
    this.partyName = '';
    this.printType = '';
    this.printStatus = '';
    this.wide = '';
    this.hight = '';
    this.quantity = '';
    this.fileName = '';
    this.frameAdd = '';
  }
}
