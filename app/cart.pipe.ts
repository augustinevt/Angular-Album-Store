import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: 'cart',
  pure: false
})
export class CartPipe implements PipeTransform {
  transform(albums: Album[], args) {
    var cartList: Album[] = [];
    albums.forEach((album) => {
      if(album.inCart){
        cartList.push(album);
      }
    });
    return cartList;
  }
}
