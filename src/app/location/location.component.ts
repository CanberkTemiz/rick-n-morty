import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  type = 'location';
  //get location data 

  //send to view


  constructor() { }

  onLocationsFetched(data: any) {
    console.log(data);
  }

}
