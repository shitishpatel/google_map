import { Component } from '@angular/core';
// import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  lat:any;
  lng:any;
  map(item:any){
    this.lat= item.lat;
    this.lng = item.lng;
  }
}
