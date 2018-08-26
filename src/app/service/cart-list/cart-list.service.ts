import { Injectable } from '@angular/core';

@Injectable()
export class CartListService {
  // store cart list
  cart_list = [];

  constructor() { }

  // 1st in
  insert_cart_list(insert_arry) {
    this.cart_list.push(insert_arry);
  }

  // Get Spacfic item
  get_every_item(item_name) {

    const ob: {[k: string]: any} = this.cart_list;
    const ob2: {[k: string]: any} = {};
    // console.log(ob);
    // console.log(ob.item_name);
    return ob.item_name;
  }

  // last in 1st out
  retrun_cart_list() {
    return this.cart_list.pop();
  }

  // return the array number
  get_array_length() {
    return this.cart_list.length;
  }

  // view the array for debug perpose
  view_list() {
    return this.cart_list;
  }
}
