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

  img_link: any;

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
      title: 'Daily Account Details',
      vAxis: { title: 'Amount' },
      hAxis: { title: 'Day' },
      seriesType: 'bars',
      series: { 5: { type: 'line' } }
    }
  };

  // total sft view
  resultOfSFTComboChart: { [k: string]: any } = {};
  isSFTChartReady = false;
  SFTChartData: any = {
    chartType: 'ComboChart',
    dataTable: [
      ['Type', 'SFT']
    ],
    options: {
      title: 'Total Print Details',
      vAxis: { title: 'SFT' },
      hAxis: { title: 'TYPE' },
      seriesType: 'bars',
      series: { 5: { type: 'line' } }
    }
  };

  // printing
  // total sft view
  // resultOfPrintingComboChart: { [k: string]: any } = {};
  // isPrintingChartReady = false;
  // PrintingChartData: any = {
  //   chartType: 'ComboChart',
  //   dataTable: [
  //     ['Status', 'Count', 'Date']
  //   ],
  //   options: {
  //     title: 'Daily Printing Details',
  //     vAxis: { title: 'Count' },
  //     hAxis: { title: 'date' },
  //     seriesType: 'bars',
  //     series: { 5: { type: 'line' } }
  //   }
  // };

  constructor(
    private sql: SqlService,
    private message: MessageService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.img_link = this.sql.url + '/RBDesktopSoft/img/RB_Texture.jpg';
    if (this.cookie.get('login') === '1') {
      this.pieChartData.dataTable.push(['Account', 'Amount']);

      this.piChartData();
      this.DaySummryViewChartData();
      this.SFTComboChartData();
      // this.PrintingComboChartData();
      // this cause zone problem
      // setInterval(() => {
      //   this.piChartData();
      //   this.DaySummryViewChartData();
      // }, 5000);
    } else {
      this.router.navigate(['/']);
    }
  }

  piChartData() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'Select sum(DISTINCT amount) as totalAmount,sum(DISTINCT Due) as totalDue, sum(DISTINCT advance) as totalAdvance From account limit 1' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.resultOfPicChart = response.json()[0];

        if (response.json()[0].totalAmount === null) {
          // console.log('Nothing Found');
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Pi Chart 1 Details Not Found' });
        } else {
          this.pieChartData.dataTable.push(['Amount', Number(this.resultOfPicChart.totalAmount)]);
          this.pieChartData.dataTable.push(['Advance', Number(this.resultOfPicChart.totalAdvance)]);
          this.pieChartData.dataTable.push(['Due', Number(this.resultOfPicChart.totalDue)]);
          // console.log(this.pieChartData);
          this.isPiChartReady = true;
          // console.log('Found');
          this.message.add({ severity: 'success', summary: 'Updated', detail: 'Pi Chart 1 Details Updated' });
        }
      },
      err => {
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      });
  }


  DaySummryViewChartData() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'Select sum(DISTINCT amount) as totalAmount,sum(DISTINCT Due) as totalDue, sum(DISTINCT advance) as totalAdvance, CreatedDate From account GROUP BY CreatedDate DESC LIMIT 50' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.resultOfComboChart = response.json();
        if (this.resultOfComboChart.length === 0) {
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Pi Chart 2 Details Not Found' });
        } else {
          for (let i = 0; i < this.resultOfComboChart.length; i++) {
            // tslint:disable-next-line:max-line-length
            this.DayChartData.dataTable.push([this.resultOfComboChart[i].CreatedDate, Number(this.resultOfComboChart[i].totalAmount), Number(this.resultOfComboChart[i].totalAdvance), Number(this.resultOfComboChart[i].totalDue)]);
          }
          this.message.add({ severity: 'success', summary: 'Updated', detail: 'Pi Chart 2 Details Updated' });
          // console.log(this.DayChartData.dataTable);
          this.isComboChartReady = true;
        }
      },
      err => {
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  // SFT Chart
  SFTComboChartData() {
    // tslint:disable-next-line:max-line-length
    const Temp_store = { 'sql': 'select printdetails.PrintType as type, sum(printdetails.sft) as sft from printdetails GROUP BY printdetails.PrintType' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
      response => {
        this.resultOfSFTComboChart = response.json();
        if (this.resultOfSFTComboChart.length === 0) {
          this.message.add({ severity: 'error', summary: 'Problem', detail: 'Pi Chart 3 Details Not Found' });
        } else {
          for (let i = 0; i < this.resultOfSFTComboChart.length; i++) {
            // tslint:disable-next-line:max-line-length
            this.SFTChartData.dataTable.push([this.resultOfSFTComboChart[i].type, Number(this.resultOfSFTComboChart[i].sft)]);
          }
          this.message.add({ severity: 'success', summary: 'Updated', detail: 'Pi Chart 3 Details Updated' });
          // console.log(this.DayChartData.dataTable);
          this.isSFTChartReady = true;
        }
      },
      err => {
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  // printing Details
  // // SFT Chart
  // PrintingComboChartData() {
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   const Temp_store = { 'sql': 'select printstatus.Status as status, COUNT(printstatus.Status) as Count, printstatus.CreatedDate as date from printstatus GROUP BY printstatus.Status' };
  //   this.sql.postRequest('allSqlQuery/allSqlQuery.php', Temp_store).subscribe(
  //     response => {
  //       this.resultOfPrintingComboChart = response.json();
  //       if (this.resultOfPrintingComboChart.length === 0) {
  //         this.message.add({ severity: 'error', summary: 'Problem', detail: 'Pi Chart 4 Details Not Found' });
  //       } else {
  //         for (let i = 0; i < this.resultOfPrintingComboChart.length; i++) {
  //           // tslint:disable-next-line:max-line-length
             // tslint:disable-next-line:max-line-length
             // this.PrintingChartData.dataTable.push([this.resultOfPrintingComboChart[i].status, Number(this.resultOfPrintingComboChart[i].Count), this.resultOfPrintingComboChart[i].date]);
  //         }
  //         this.message.add({ severity: 'success', summary: 'Updated', detail: 'Pi Chart 4 Details Updated' });
  //         console.log(this.PrintingChartData.dataTable);
  //         this.isPrintingChartReady = true;
  //       }
  //     },
  //     err => {
  //       this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
  //     }
  //   );
  // }

  refresh() {
    this.piChartData();
    this.DaySummryViewChartData();
    this.SFTComboChartData();
  }

  isOnline() {
    this.sql.ping().subscribe(
      response => {
        if (response.status === 200) {
          return true;
        } else {
          return false;
        }
      },
      err => {
        return false;
      });
  }
}
