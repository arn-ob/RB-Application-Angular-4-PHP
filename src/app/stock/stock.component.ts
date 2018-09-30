import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  display: Boolean = false;

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

  // media work
  typeAndSumResult = [];
  inShow = true;

  // stock
  stock = [];

  constructor(
    private message: MessageService,
    private sql: SqlService
  ) { }

  ngOnInit() {
    this.getTypeFromDB();
    this.getStockDB();

  }

  showDialog() {
    this.display = true;
  }

  isNumber() {
    if (!Number(this.size)) {
      this.size = undefined;
    }
  }

  remainingCalculate() {
    this.tempVal1 = this.typeAndSumResult;
    this.tempVal2 = this.stock;
    let inSum = 0;
    let outSum = 0;
    for (let i = 0; i < this.tempVal2.length; i++) {
      if (this.tempVal2[i].mediawhere === 'IN') {
        inSum = inSum + Number(this.tempVal2[i].size);
      }
      if (this.tempVal2[i].mediawhere === 'OUT') {
        outSum = outSum + Number(this.tempVal2[i].size);
      }
    }
    this.INsum = inSum;
    this.OUTsum = outSum;

    // console.log({inSum, outSum});
  }

  postToStockDB() {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'INSERT INTO stock(id, details, media, size, mediawhere, created_time, created_date) VALUES ("' + this.getRandomID() + '", "' + this.details + '", "' + this.media + '", "' + this.size + '", "' + this.mediaWhere + '", "' + this.geTime() + '", "' + this.geDate() + '")' };
    this.sql.postQry(sql, 'phpQuery/queryArgRDone.php').then((result) => {
      console.log(result);
      this.getStockDB();
      this.remainingCalculate();
      this.clearinput();
    });
  }

  DeleteFromStockDB(value) {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'DELETE FROM stock WHERE id = "' + value + '"' };
    this.sql.postQry(sql, 'phpQuery/queryArgRDone.php').then((result) => {
      console.log(result);
      this.getStockDB();
    });
  }

  getStockDB() {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'SELECT * from stock' };
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {
      this.stock = result;
      this.remainingCalculate();
    });
  }

  getTypeFromDB() {
    // tslint:disable-next-line:max-line-length
    const sql = { 'sql': 'SELECT printdetails.PrintType as type, sum(printdetails.sft) as sftsum from printdetails GROUP BY printdetails.PrintType' };
    this.sql.postQry(sql, 'phpQuery/queryArgRJson.php').then((result) => {
      this.typeAndSumResult = result;
    });
  }

  // time return
  geTime() {
    const date = new Date();
    let time = date.getHours() + ''; // convert number to string and it will again use as string
    if (Number(time) >= 12) {
      const pm = Number(date.getHours()) - 12;
      time = pm + ':' + date.getMinutes() + ':' + date.getSeconds() + 'pm';
    } else {
      time = time + ':' + date.getMinutes() + ':' + date.getSeconds() + 'am';
    }
    return time;
  }

  // date return
  geDate() {
    const date = new Date();
    const presentDate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
    return presentDate;
  }

  getRandomID() {
    const date = new Date();
    const uuid = UUID.UUID();
    // tslint:disable-next-line:max-line-length
    const id = date.getHours().toString() + date.getMinutes().toString() + date.getMilliseconds().toString() + uuid.split('-')[2];
    return id;
  }

  clearinput() {
    this.details = undefined;
    this.size = undefined;
    this.media = undefined;
    this.mediaWhere = undefined;
  }
}
