import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from '../search.service';
import { ApiResponse, Character, Info, Location } from '../types';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {
  results: Location[] = [];
  info: Info;
  type = 'location';
  term: string;
  people$: Observable<Character[]>;
  private termSub: Subscription;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(){
    this.termSub = this.searchService.term.subscribe(term => this.term = term);
  }

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

  ngOnDestroy(){
    this.termSub.unsubscribe();
  }   

}
