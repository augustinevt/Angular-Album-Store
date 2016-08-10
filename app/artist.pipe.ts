import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: 'artist',
  pure: true
})

export class ArtistPipe implements PipeTransform {
  transform(albums: Album[], args){
    var selectedArtist = args[0];
    var filteredAlbums = [];
    if (selectedArtist === "all") {
      return albums;
    }
    albums.forEach((album)=> {
      if(album.artist === selectedArtist){
        filteredAlbums.push(album);
      }
    });
    return filteredAlbums;
  }
}
