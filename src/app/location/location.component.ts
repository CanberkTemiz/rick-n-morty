import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Character, Info, Location } from '../types';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  results: Location[] = [];
  info: Info;
  type = 'location';
  term: string;
  people$: Observable<Character[]>;

  constructor(private service: ApiService) { }

  onLocationsFetched(data: any) {
    console.log(data);
    this.results = data.results;
    this.info = data.info;
  }

}
