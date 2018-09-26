import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  display: Boolean = false;

  // result work
  inResult: { [k: string]: any } = {};
  inResult2: { [k: string]: any } = {};
  typeArray = [];
  typeArrayTemp: { [k: string]: any } = {};
  typeSFTtotalArray = [];
  inShow = true;

  constructor(
    private message: MessageService,
    private sql: SqlService
  ) { }

  ngOnInit() {
    this.getTypeFromDB();

  }

  showDialog() {
    this.display = true;
  }

  SQLRequest(v1, v2, v3, v4) {

    /*
    v1 = porpose
    v2 = details
    v3 = amount
    v4 = type
    */
    //   this.message.add({ severity: 'info', summary: 'Processing', detail: 'Sending to DB' });
    //   // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //   const sql = { 'sql': 'INSERT INTO CashINOUT (entryid, porpose, details, amount, type, updateby, CreatedTime, CreatedDate) VALUES ("' + this.getRandomID() + '", "' + v1 + '", "' + v2 + '", "' + v3 + '", "' + v4 + '","' + this.cookie.get('username') + '", "' + this.geTime() + '", "' + this.geDate() + '")' };
    //   // console.log(sql);
    //   this.sql.postRequest('anySql/anySql.php', sql).subscribe(
    //     response => {
    //       // console.log(response.json());
    //       if (response.json()[0].status === 'Done') {
    //         this.message.add({ severity: 'success', summary: 'Recorded', detail: 'Store To DB' });
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
    //     }
    //   );
    // }
  }

  getTypeFromDB() {
    const sql = { 'sql': 'SELECT * FROM printtype' };
    // console.log(sql);
    this.sql.postRequest('phpQuery/queryArgRJson.php', sql).subscribe(
      response => {
        console.log(response.json());
        this.inResult = response.json();
        for (let i = 0; i < this.inResult.length; i++) {
          console.log(this.inResult[i].type);
          this.typeArray.push({ 'type': this.inResult[i].type });
        }
        console.log(this.typeArray);
        this.getTypeSFTtotalFromDB();
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  getTypeSFTtotalFromDB() {
    this.typeArrayTemp = this.typeArray;
    for (let i = 0; i < this.typeArrayTemp.length; i++) {
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'SELECT sum(sft) as sft FROM printdetails WHERE printtype ="' + this.typeArrayTemp[i].type + '"' };
      this.sql.postRequest('phpQuery/queryArgRJson.php', sql).subscribe(
        response => {
          console.log(response.json());
          this.inResult2 = response.json();
          this.typeSFTtotalArray.push({ 'typeSum': this.inResult2[0].sft });

        },
        err => {
          console.log(err);
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
        }
      );
    }
    console.log(this.typeSFTtotalArray);
  }
}
