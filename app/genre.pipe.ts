import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';


@Pipe({
  name: "genre",
  pure: true
})
export class GenrePipe implements PipeTransform {
  transform(albums: Album[], args){
    var selectedGenre = args[0];
    var filteredAlbums = [];
    if (selectedGenre === "all") {
      return albums;
    }
    albums.forEach((album)=> {
      if(album.genre === selectedGenre){
        filteredAlbums.push(album);
      }
    });
    return filteredAlbums;
  }
}
