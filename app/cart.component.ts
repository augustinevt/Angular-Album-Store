import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'shopping-cart',
  inputs: ['albumList'],
  template: `
  <div>
    <h4>Your Cart</h4>
    <h6 *ngFor="#album of albumList">{{album.name}}</h6>
    <h3>Total \${{ cartTotal() }}</h3>
  </div>
  `
})
export class CartComponent {
  public fooChild: string;
  public albumList: Album[];
  constructor(){
    console.log(this.albumList);
  }
  cartTotal(){
    var total: number = 0;
    if (!(this.albumList )) {return total;}
    this.albumList.forEach((album)=>{
        total += parseFloat(album.price);
    });
    return total;
  }
}
