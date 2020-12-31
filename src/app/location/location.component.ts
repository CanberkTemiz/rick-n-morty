import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { SearchService } from '../search.service';
import { ApiResponse, Character, Info, Location } from '../types';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {
  locations: Location[] = [];
  info: Info;
  type = 'location';
  term: string;
  isFetching = false;
  people$: Observable<Character[]>;
  private termSub: Subscription;
  private fetchSub: Subscription;

  constructor(
    private service: ApiService,
    private searchService: SearchService
  ) { }

  ngOnInit(){
    this.termSub = this.searchService.term.subscribe(term => this.term = term);
    this.fetchSub = this.searchService.isFetching.subscribe(data => this.isFetching = data);
    
    this.service.sectionData.subscribe((data: ApiResponse<Location>) => this.loadLocations(data));
  }

  private loadLocations(data){
    this.locations = data.results;
    this.info = data.info;
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
    this.fetchSub.unsubscribe();
  }   

}
