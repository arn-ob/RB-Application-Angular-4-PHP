import { ConfirmationService } from 'primeng/api';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { Md5 } from 'ts-md5';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';

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
  optinalPrice: any;
  optinal: any;

  // array list
  this_array = [];
  db_push_array = [];
  db_push_array_size: any;

  // Type Details
  typeResult = [];
  isTypeinfoShow = false;

  // form bill
  bill: any;

  // sql process error
  sqlError: false;
  submitLock = false;
  isDialog = false;

  // query
  filterednameSearch: any;
  nameSearch: any;




  constructor(
    private sql: SqlService,
    private cookie: CookieService,
    private md5: Md5,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService
    // private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.cookie.delete('cd');
    this.cookie.set('cd', 'PrintRequestComponent');
    this.get_array_length();
    this.TypeDetails();
    const date = new Date();
    // const md5 = new Md5();
    // this.bill = this.md5.appendStr(date.toString()).end();
    const uuid = UUID.UUID();
    // tslint:disable-next-line:max-line-length
    this.bill = date.getHours().toString() + date.getMinutes().toString() + date.getMilliseconds().toString() + uuid.split('-')[2];

  }

  // add to cart list
  add_to_cart() {
    // this.get_array();
    if (this.checkEntry()) {
      this.messageService.add({ severity: 'info', summary: 'Information', detail: 'Added to list and Print Details Clear' });

      this.db_push_array.push(this.get_array());
      this.get_array_length();
      this.AIid++;

      // console.log(this.db_push_array); // check the store array
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
            // console.log(response);
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
    if (this.phnNo2 === undefined) { this.phnNo2 = '0'; }
    if (this.printName === undefined) { this.printName = 'None'; }
    if (this.optinal === undefined) { this.optinal = 'None'; }
    this.optinalPrice = '0'; // Default 0 it change from Account
    const temp = {
      'AIid': this.AIid,
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
      'fileName': this.printName + ' ' + this.printType + ' ' + this.hight + 'x' + this.wide + 'x' + this.quantity,
      'option': this.optinal,
      'optionPrice': this.optinalPrice
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
    this.printType = undefined;
    this.printStatus = undefined;
    this.wide = undefined;
    this.hight = undefined;
    this.quantity = undefined;
    this.optinal = undefined;
    this.optinalPrice = undefined;
    this.printName = undefined;
    // this.messageService.add({ severity: 'info', summary: 'Message', detail: 'Print Details Field Clear' });
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

  // Check Entry List and Verify wither it entry or not
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
    } else {
      return true;
    }
  }

  // get the list of print Type
  TypeDetails() {
    const sql = { 'sql': 'select * from printtype' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).subscribe(
      response => {
        this.typeResult = response.json();
        if (this.typeResult.length === 0) {
          this.messageService.add({ severity: 'error', summary: 'Problem Found', detail: 'No Type Found' });
        } else {
          this.isTypeinfoShow = true;
          // console.log(this.typeResult);
        }
      },
      err => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  isNumber(value) {
    if (!Number(value)) {
      this.messageService.add({ severity: 'error', summary: 'Problem Found', detail: 'Enter Number' });
      this.submitLock = true;
    } else {
      this.submitLock = false;
    }
    if (value === undefined) {
      this.submitLock = false;
    }
  }


  canDeactivate() {
    if (this.db_push_array_size !== 0) {
      this.isDialog = true;
      this.confirmationService.confirm({
        message: 'Are You Sure Because The Print list Was Not Empty. Please check the Print list',
        accept: () => {
          return true;
        },
        reject: () => {
          this.isDialog = false;
          return false;
        }
      });
    } else {
      this.isDialog = false;
      return true;
    }
  }

  cleanAll() {
    this.db_push_array = [];
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
    this.optinal = undefined;
    this.optinalPrice = undefined;
    this.printName = undefined;
    this.get_array_length();
    this.messageService.add({ severity: 'info', summary: 'Message', detail: 'Page Refresh' });
  }


  // auto complete and search name from DB
  filternameSearch(event) {
    const query = event.query;
    const sql = { 'sql': 'SELECT PartyName as name, BillNo FROM client_details GROUP BY phoneNo1' };
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
      const sql = { 'sql': 'select * from client_details where BillNo = "' + this.nameSearch.BillNo + '"' };
      this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).subscribe(
        response => {
          this.partyName = response.json()[0].PartyName;
          this.name = response.json()[0].name;
          this.address = response.json()[0].address;
          this.phnNo1 = response.json()[0].phoneNo1;
          if (response.json()[0].phoneNo2 === '0') {
            this.phnNo2 = undefined;
          } else {
            this.phnNo2 = response.json()[0].phoneNo2;
          }

        },
        err => {
          console.log(err);
          this.messageService.add({ severity: 'error', summary: 'Problem Found', detail: err });
        }
      );
      // console.log(this.nameSearch.BillNo);
    }
  }
}
