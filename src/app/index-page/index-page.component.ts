import { CartListService } from './../service/cart-list/cart-list.service';
import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { SqlService } from '../service/sql/sql.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  // Pi chart
  resultOfPicChart: { [k: string]: any } = {};
  isPiChartReady = false;
  pieChartData = {
    chartType: 'PieChart',
    dataTable: [],
    options: {
      'title': 'Account Details',
      slices: {
        0: {
          offset: 0.1
        },
        1: {
          offset: 0.1
        },
        2: {
          offset: 0.1
        }
      }
    },
  };

  // Month Chart
  resultOfComboChart: { [k: string]: any } = {};
  isComboChartReady = false;
  DayChartData: any = {
    chartType: 'ComboChart',
    dataTable: [
      ['Month', 'Amount', 'Advance', 'Due']
    ],
    options: {
      title: 'Daily Details',
      vAxis: { title: 'Amount' },
      hAxis: { title: 'Day' },
      seriesType: 'bars',
      series: { 5: { type: 'line' } }
    }
  };

  constructor(
    private sql: SqlService,
    private message: MessageService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.cookie.get('login') === '1') {
      this.pieChartData.dataTable.push(['Account', 'Amount']);
      setInterval(() => {
        this.piChartData();
        this.DaySummryViewChartData();
      }, 1000);
    } else {
      this.router.navigate(['/']);
    }
  }

  piChartData() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'Select sum(DISTINCT amount) as totalAmount,sum(DISTINCT Due) as totalDue, sum(DISTINCT advance) as totalAdvance From account' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.resultOfPicChart = response.json()[0];
        // console.log(response.json()[0]);
        if (this.resultOfPicChart.length === 0) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Pi Chart Details Not Found' });
        } else {
          this.pieChartData.dataTable.push(['Amount', Number(this.resultOfPicChart.totalAmount)]);
          this.pieChartData.dataTable.push(['Advance', Number(this.resultOfPicChart.totalAdvance)]);
          this.pieChartData.dataTable.push(['Due', Number(this.resultOfPicChart.totalDue)]);
          // console.log(this.pieChartData);
          this.isPiChartReady = true;
          // console.log('Found');
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }


  DaySummryViewChartData() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'Select sum(DISTINCT amount) as totalAmount,sum(DISTINCT Due) as totalDue, sum(DISTINCT advance) as totalAdvance, CreatedDate From account GROUP BY CreatedDate DESC LIMIT 20' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.resultOfComboChart = response.json();

        if (this.resultOfComboChart.length === 0) {

          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Pi Chart Details Not Found' });

        } else {

          // tslint:disable-next-line:max-line-length
          for (let i = 0; i < this.resultOfComboChart.length; i++) {
            // tslint:disable-next-line:max-line-length
            this.DayChartData.dataTable.push([this.resultOfComboChart[i].CreatedDate, Number(this.resultOfComboChart[i].totalAmount), Number(this.resultOfComboChart[i].totalAdvance), Number(this.resultOfComboChart[i].totalDue)]);
          }
          console.log(this.DayChartData.dataTable);
          this.isComboChartReady = true;

        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }

}
