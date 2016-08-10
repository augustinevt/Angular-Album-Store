import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div>
      <input *ngIf="album.inCart" type="checkbox" checked (click)="toCart(false)">
      <input *ngIf="!album.inCart" type="checkbox" (click)="toCart(true)">
      <h3>{{album.name}} | {{album.artist}} | $\{{album.price}}</h3>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
  toCart(albumInCart: boolean) {
    this.album.inCart = albumInCart;
  }
}
