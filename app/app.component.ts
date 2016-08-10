import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>CD Store</h1>
      <album-list></album-list>
    </div>
  `
})
export class AppComponent {

}
