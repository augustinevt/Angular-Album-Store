import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumComponent } from './album.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CartPipe } from './cart.pipe';
import { NewAlbumComponent } from './new-album.component';
import { CartComponent } from './cart.component';


@Component({
  selector: 'album-list',
  directives: [AlbumComponent, NewAlbumComponent, CartComponent],
  pipes: [GenrePipe, ArtistPipe, CartPipe],
  template: `
    <select (change)="selectGenre($event.target.value)" >
      <option value="all">All</option>
      <option
        *ngFor="#currentGenre of genreList"
        [value]="currentGenre">{{currentGenre}}
      </option>
    </select>

    <select (change)="selectArtist($event.target.value)" >
      <option value="all">All</option>
      <option
        *ngFor="#currentArtist of artistList"
        [value]="currentArtist">{{currentArtist}}
      </option>
    </select>

    <album-display *ngFor="#currentAlbum of albums | genre:filterGenre | artist:filterArtist"
      [album]="currentAlbum"
      (click)="albumClicked(currentAlbum)">
    </album-display>

    <new-album (newFormSubmit)="createAlbum($event)"></new-album>
    <shopping-cart [albumList]="albums | cart" ></shopping-cart>
  `
})
export class AlbumListComponent {
  public albums: Album[];
  public genreList: string[] = [];
  public artistList: string[] = [];
  public filterGenre: string = 'all';
  public filterArtist: string = "all";
  public fooParent: string = "this is foo";
  constructor(){
    this.albums = [
      new Album("Yuming Brand","13.00","Pop","Yuming Matsutoya"),
      new Album("Noir","12.00","Trip-Hop","Blue Sky Black Death"),
      new Album("Noir","12.00","Trip-Hop","Blue Sky Black Death"),
      new Album("Dark Side of the Moon","14.00","Rock","Pink Floyd"),
      new Album("Pet Sounds","11.00","Rock","Beach Boys")
    ];
    console.log(this.albums);
    this.popLists();
  }
  albumClicked(clickedAlbum: Album){
    console.log(clickedAlbum.name, clickedAlbum.price, clickedAlbum.artist, clickedAlbum.inCart);
  }
  selectGenre(selection: HTMLInputElement){
    this.filterGenre = selection.toString();
    console.log(selection);
    console.log(this.filterGenre);
  }
  selectArtist(selection: HTMLInputElement){
    this.filterArtist = selection.toString();
  }
  createAlbum(params){
    this.albums.push(new Album(params[0], params[1], params[2], params[3]));
    this.popLists();
  }
  popLists(){
    this.albums.forEach((album) => {
      if(!(this.genreList.includes(album.genre))){
        this.genreList.push(album.genre);
      };
      if(!(this.artistList.includes(album.artist))){
        this.artistList.push(album.artist);
      };
    });
  }
}
