import { CartListService } from './../service/cart-list/cart-list.service';
import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  try = [];
  constructor(
    private cart: CartListService,
    private md5: Md5
  ) { }

  ngOnInit() {
    this.check_array();
  }

  check_array() {
    const a = {'a': 'vv', 'b': 'a'};
    const b = {'b': 'vv', 'e': 'a'};
    const c = {'c': 'vv', 'b': 'a'};
    const d = {'d': 'vv', 'b': 'a'};
    this.cart.insert_cart_list(a);
    this.cart.insert_cart_list(b);
    this.cart.insert_cart_list(c);
    this.cart.insert_cart_list(d);
    this.store_to_db();
  }

  store_to_db() {
    console.log(this.cart.get_array_length());
    let a;
    // loop at reverse order
    for (let i = 0; i = this.cart.get_array_length() ; i++) {
      const Temp_store = this.cart.retrun_cart_list();
      console.log(Temp_store);
      a = Temp_store.d;
      // const md5 = new Md5();
      // console.log(this.md5.appendStr(Temp_store.d).end());
    }
  }

  // printComponent(cmpName) {
  //   const printContents = document.getElementById(cmpName).innerHTML;
  //   // const originalContents = document.body.innerHTML;

  //   // document.body.innerHTML = printContents;
  //   // window.print();
  //   // document.body.innerHTML = originalContents;

  //   const WindowPrt = window.open('', '', 'left=0,top=0,width=500,height=500,toolbar=100,scrollbars=0,status=0');
  //   WindowPrt.document.write(printContents);
  //   WindowPrt.document.close();
  //   WindowPrt.focus();
  //   WindowPrt.print();
  //   WindowPrt.close();
  // }
}
