import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResponse, Character, Info, Location } from '../types';

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

  onLocationsFetched(data: ApiResponse<Location>) {
    console.log(data);
    this.results = data.results;
    this.info = data.info;
  }

  onUpdateResult(data: ApiResponse<Location>) {
    console.log('new', data);
    this.results = data.results;
    this.info = data.info;
  }

  //change with subjects
  setTerm(term) {
    this.term = term;
  }

}
