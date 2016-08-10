import { Component } from 'angular2/core';
import { Album } from './cd.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div>
      <h3>{{album.name}} | {{album.artist}} | $\{{album.price}}</h3>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
}
