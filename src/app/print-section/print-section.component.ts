import { Component, OnInit } from '@angular/core';
import { SqlService } from '../service/sql/sql.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

declare function require(url: string);

@Component({
  selector: 'app-print-section',
  templateUrl: './print-section.component.html',
  styleUrls: ['./print-section.component.css']
})
export class PrintSectionComponent implements OnInit {
  username;
  result = [];
  isLoaded = false;
  nothingFound = false;
  printStatus: any;
  printStatusTemp: any;

  constructor(
    private sql: SqlService,
    private cookieService: CookieService,
    private router: Router,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.cookieService.delete('cd');
    this.username = this.cookieService.get('username');
    this.printDetails();
  }

  printDetails() {
    // Some how it did not work from var.
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': this.parseSqlFromJSON('details') };
    this.message.add({ severity: 'warn', summary: 'Wait', detail: 'Working' });
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        // console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          this.nothingFound = true;
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Nothing Found' });
          // console.log('Nothing Found');
        } else {
          this.nothingFound = false;
          this.isLoaded = true;
          this.message.add({ severity: 'info', summary: 'Information', detail: 'Showing List' });
          // console.log('Found');
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  updatePrintStatus(change, billNo, filename) {
    console.log(change);
    this.printStatus = change;
    if (this.printStatus !== undefined && this.printStatus !== 'Not_Selected') {
      if (this.printStatus !== this.printStatusTemp) {
        this.message.add({ severity: 'warn', summary: 'Wait', detail: 'Working' });
        this.printStatusTemp = this.printStatus;

        // tslint:disable-next-line:max-line-length
        const sql = { 'sql': 'UPDATE printstatus SET Status ="' + this.printStatus + '", updateBy = "' + this.username + '"  where BillNo = "' + billNo + '" and FileName = "' + filename + '"' };
        this.sql.postRequest('updateSql/updateSql.php', sql).subscribe(
          response => {
            // console.log(response);
            if (response.json()[0].status === 'Done') {
              this.message.add({ severity: 'info', summary: 'Information', detail: 'Updated' });
              this.printDetails();
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
  }

  statement(value) {
    const Temp_store = { 'sql': this.parseSqlFromJSON(value) };
    this.message.add({ severity: 'warn', summary: 'Wait', detail: 'Working' });
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        console.log(response.json());
        this.result = response.json();
        if (this.result.length === 0) {
          this.nothingFound = true;
          console.log('Nothing Found');
        } else {
          this.nothingFound = false;
          console.log('Found');
          this.isLoaded = true;
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

  // parse sql query from json file
  parseSqlFromJSON(value) {
    const sqlQuery = require('../print-section/sql.json');
    return sqlQuery[value];
  }

}
