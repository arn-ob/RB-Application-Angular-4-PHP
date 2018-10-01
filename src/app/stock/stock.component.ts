import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UUID } from 'angular2-uuid';
import { TimeDateID } from './timeDateID';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  display: Boolean = false;

  // view
  readyForViewStock = false;
  readyForViewType = false;

  // input info
  details: any;
  media: any;
  size: any;
  mediaWhere: any;

  // remaining Calculate
  tempVal1: { [k: string]: any } = {};
  tempVal2: { [k: string]: any } = {};
  totalIn: { [k: string]: any } = {};
  totalout: { [k: string]: any } = {};
  remain: { [k: string]: any } = {};
  INsum = 0;
  OUTsum = 0;
  Wastesum = 0;
  typeSQL;
  stockSQL;

  // media work
  typeAndSumResult = [];
  inShow = true;
  type = [];
  typeOptionShow = false;

  // stock
  stock = [];

  constructor(
    private message: MessageService,
    private sql: SqlService,
    private tdi: TimeDateID
  ) { }

  ngOnInit() {
    this.All();
    this.getEntryTypeFromDB();

  }

  // Show th Stock input Field
  showDialog() {
    this.display = true;
  }

  // Check Number
  isNumber() {
    if (!Number(this.size)) {
      this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'Please Enter Number' });
      this.size = undefined;
    }
  }

  remainingCalculate() {
    this.tempVal1 = this.typeAndSumResult;
    this.tempVal2 = this.stock;
    let inSum = 0;
    let outSum = 0;
    let wastesum =  0;
    for (let i = 0; i < this.tempVal2.length; i++) {
      if (this.tempVal2[i].mediawhere === 'IN') {
        inSum = inSum + Number(this.tempVal2[i].size);
      }
      if (this.tempVal2[i].mediawhere === 'OUT') {
        outSum = outSum + Number(this.tempVal2[i].size);
      }
      if (this.tempVal2[i].mediawhere === 'WASTE') {
        wastesum = wastesum + Number(this.tempVal2[i].size);
      }
    }
    this.INsum = inSum;
    this.OUTsum = outSum;
    this.Wastesum = wastesum;
    // console.log({inSum, outSum});
  }

  /**
   * This Function Use for store stock input to database
   */
  postToStockDB() {
    if (this.media === undefined || this.mediaWhere === undefined || this.details === undefined || this.size === undefined) {
      this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'Check Stock Input' });
    } else {
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'INSERT INTO stock(id, details, media, size, mediawhere, created_time, created_date) VALUES ("' + this.tdi.getRandomID() + '", "' + this.details + '", "' + this.media + '", "' + this.size + '", "' + this.mediaWhere + '", "' + this.tdi.geTime() + '", "' + this.tdi.geDate() + '")' };
      this.sql.postQry(sql, 'phpQuery/queryArgRDone.php').then((result) => {
        console.log(result);
        this.getStockDB();
        this.remainingCalculate();
        this.clearinput();
      }).catch ( err => {
        this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
      });
    }
  }

  /**
   * This delete stock record from Database
   * @param value Stock ID
   */
  DeleteFromStockDB(value) {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'DELETE FROM stock WHERE id = "' + value + '"' };
    this.sql.postQry(sql, 'phpQuery/queryArgRDone.php').then((result) => {
      console.log(result);
      this.getStockDB();
    }).catch ( err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
  }

  /**
   * Get the print type from DB PrintType Table and Store to Array
   * For Display
   */
  getEntryTypeFromDB() {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'SELECT type FROM printtype' };
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {
      this.type = result;
      this.typeOptionShow = true;
    }).catch ( err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
  }

  /**
   * Get the Stock details from DB stock table
   */
  getStockDB() {
    // tslint:disable-next-line:max-line-length
    const sql = this.stockSQL;
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {
      this.stock = result;
      this.readyForViewStock = true; // ready for render
      this.remainingCalculate();
    }).catch ( err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
  }

  /**
   * Get the print type and Print Type Total Sum From PrintDetails
   */
  getTypeFromDB() {
    // tslint:disable-next-line:max-line-length
    const sql = this.typeSQL;
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {
      this.typeAndSumResult = result;
      this.readyForViewType = true; // ready for render
    }).catch ( err => {
      this.message.add({ severity: 'error', summary: 'SQL Error', detail: err });
    });
  }

  // sql bind
  All() {
    this.stockSQL = { 'sql': 'SELECT * from stock' };
    // tslint:disable-next-line:max-line-length
    this.typeSQL = { 'sql': 'SELECT printdetails.PrintType as type, sum(printdetails.sft) as sftsum from printdetails GROUP BY printdetails.PrintType' };
    this.getTypeFromDB();
    this.getStockDB();
  }


  /** Clear the input Field */
  clearinput() {
    this.details = undefined;
    this.size = undefined;
    this.media = undefined;
    this.mediaWhere = undefined;
  }
}
