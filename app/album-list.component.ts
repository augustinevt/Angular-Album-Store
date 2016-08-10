import { Component } from 'angular2/core';
import { Album } from './cd.model';
import { AlbumComponent } from './album.component';

@Component({
  selector: 'album-list',
  directives: [AlbumComponent],
  template: `
    <album-display *ngFor="#currentAlbum of albums"
    [album]="currentAlbum">
    </album-display>
  `
})
export class AlbumListComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Yuming Brand","13.00","Pop","Yuming Matsutoya"),
      new Album("Noir","12.00","Trip-Hop","Blue Sky Black Death"),
      new Album("Dark Side of the Moon","14.00","Rock","Pink Floyd"),
      new Album("Pet Sounds","11.00","Rock","Beach Boys")
    ];
    console.log(this.albums);
  }
}
