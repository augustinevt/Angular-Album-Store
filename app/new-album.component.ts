import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'new-album',
  inputs: ['album'],
  outputs: ['newFormSubmit'],
  template: `
    <h4>Add an Album</h4>
    <form>
    <input placeholder="album name" #newName required >
    <input placeholder="album price" #newPrice required >
    <input placeholder="album genre" #newGenre required >
    <input placeholder="album artist" #newArtist required >
    <button (click)="submitForm(newName, newPrice, newGenre, newArtist)">Add</button>

    </form>
  `
})
export class NewAlbumComponent {
  public newFormSubmit: EventEmitter<string[]>;
  constructor(){
    this.newFormSubmit = new EventEmitter();
  }
  submitForm(name: HTMLInputElement, price: HTMLInputElement, genre: HTMLInputElement, artist: HTMLInputElement) {
    this.newFormSubmit.emit([name.value, price.value, genre.value, artist.value]);
    name.value = ''; price.value = ''; genre.value = ''; artist.value = '';
  }
}
