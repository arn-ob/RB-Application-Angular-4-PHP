import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { SqlService } from '../service/sql/sql.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  roleType: SelectItem[];
  type: any;
  username: any;
  password: any;
  LoginResult: { [k: string]: any } = {};

  PrintType: any;
  typeResult: { [k: string]: any } = {};
  isTypeinfoShow = false;

  // showing Rule
  isLoginInfoShow = false;
  isEntry = false;
  constructor(
    private message: MessageService,
    private sql: SqlService,
    private md5: Md5,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    // for Login
    this.RoleDetails();
    this.loginDetails();

    // for print type
    this.TypeDetails();
  }

  // list of role
  RoleDetails() {
    this.roleType = [
      { label: 'Select Role', value: null },
      { label: 'Admin', value: { id: 1, name: 'Admin', code: 'ad' } },
      { label: 'Account', value: { id: 2, name: 'Account', code: 'ac' } },
      { label: 'Print', value: { id: 3, name: 'Print', code: 'pr' } }
    ];
  }

  // For Login
  selectType(v) {
    const a = v ? v.name : 'none';
    this.type = a;
    if (a === 'none') {
      this.isEntry = false;
    } else {
      this.isEntry = true;
    }
  }

  newAccount() {
    // tslint:disable-next-line:max-line-length
    if (!this.isEntry || this.username === undefined || this.password === undefined) {
      this.message.add({ severity: 'error', summary: 'Check Role', detail: 'Check Role Entry' });
    } else {
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'INSERT INTO login (id, username, password, role) VALUES ("' + btoa(this.username) + '","' + btoa(this.username) + '","' + btoa(this.password) + '","' + this.type + '")' };
      console.log(sql);
      this.sql.postRequest('anySql/anySql.php', sql).subscribe(
        response => {
          if (response.json()[0].status === 'Done') {
            this.message.add({ severity: 'info', summary: 'Updated', detail: 'New User added' });
            this.loginDetails();
            this.clearLoginForm();
          }
        },
        err => {
          console.log(err);
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
        }
      );
    }
  }

  loginDetails() {
    const sql = { 'sql': 'select * from login' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).subscribe(
      response => {
        this.LoginResult = response.json();
        if (this.LoginResult.length === 0) {
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'No User Found' });
        } else {

          // Convert encoding to string
          for (let i = 0; i < this.LoginResult.length; i++) {
            this.LoginResult[i].username = atob(this.LoginResult[i].username);
            this.LoginResult[i].password = atob(this.LoginResult[i].password);
          }
          this.isLoginInfoShow = true;
          this.message.add({ severity: 'info', summary: 'Login List Found', detail: 'Showing To List' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  deleteLogin(v) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this user?',
      accept: () => {
        const sql = { 'sql': 'DELETE FROM login WHERE id = "' + v + '"' };
        // console.log(sql);
        this.sql.postRequest('anySql/anySql.php', sql).subscribe(
          response => {
            if (response.json()[0].status === 'Done') {
              this.message.add({ severity: 'info', summary: 'Info', detail: 'User Deleted' });
              this.loginDetails();
            }
          },
          err => {
            console.log(err);
            this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
          });
      },
      reject: () => {
        this.message.add({ severity: 'info', summary: 'Info', detail: 'User Deleted rejected' });
      }
    });
  }

  clearLoginForm() {
    this.username = undefined;
    this.password = undefined;
  }
  // For Login .............................. End


  // For Print Type ......................... Start
  newType() {

    // Create Time
    const date = new Date();
    const createdDate = date.toLocaleDateString() + ':' + date.getMilliseconds() + ':' + date.getSeconds();

    // tslint:disable-next-line:max-line-length
    if (this.PrintType === undefined) {
      this.message.add({ severity: 'error', summary: 'Check Field', detail: 'Enter Type Name' });
    } else {
      // tslint:disable-next-line:max-line-length
      const sql = { 'sql': 'INSERT INTO printtype (CreatedDate, type) VALUES ("' + createdDate + '","' + this.PrintType + '")' };
      console.log(sql);
      this.sql.postRequest('anySql/anySql.php', sql).subscribe(
        response => {
          if (response.json()[0].status === 'Done') {
            this.message.add({ severity: 'info', summary: 'Updated', detail: 'New Print Type added' });
            this.PrintType = undefined;
            this.TypeDetails();
          } else {
            this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'Contact with Dev' });
          }
        },
        err => {
          console.log(err);
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
        }
      );
    }
  }

  TypeDetails() {
    const sql = { 'sql': 'select * from printtype' };
    this.sql.postRequest('allSqlQuery/allSqlQuery.php', sql).subscribe(
      response => {
        this.typeResult = response.json();
        if (this.typeResult.length === 0) {
          this.message.add({ severity: 'error', summary: 'Problem Found', detail: 'No Type Found' });
        } else {
          // Convert encoding to string
          this.isTypeinfoShow = true;
          this.message.add({ severity: 'info', summary: 'Login List Found', detail: 'Showing To List' });
        }
      },
      err => {
        console.log(err);
        this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
      }
    );
  }

  deletetype(v) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this user?',
      accept: () => {
        const sql = { 'sql': 'DELETE FROM printtype WHERE CreatedDate = "' + v + '"' };
        // console.log(sql);
        this.sql.postRequest('anySql/anySql.php', sql).subscribe(
          response => {
            if (response.json()[0].status === 'Done') {
              this.message.add({ severity: 'info', summary: 'Info', detail: 'Type Deleted' });
              this.TypeDetails();
            }
          },
          err => {
            console.log(err);
            this.message.add({ severity: 'error', summary: 'Problem Found', detail: err });
          });
      },
      reject: () => {
        this.message.add({ severity: 'info', summary: 'Info', detail: 'User Deleted rejected' });
      }
    });
  }

  ad() {
    const date = new Date();
    console.log(date.toLocaleDateString() + date.getMilliseconds() + date.getSeconds());
  }

}
