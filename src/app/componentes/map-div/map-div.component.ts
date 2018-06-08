import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

/*import { AgmCoreModule } from '@agm/core';*/

@Component({
  selector: 'app-map-div',
  templateUrl: './map-div.component.html',
  styleUrls: ['./map-div.component.css']
})
export class MapDivComponent {
  lat = -23.5114;
  lng = -46.8729;
}

