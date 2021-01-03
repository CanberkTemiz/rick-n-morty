import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
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
  error = null;
  residentNames: string[] = [];
  private termSub: Subscription;
  private errorSub: Subscription;
  
  constructor(
    private service: ApiService,
    private searchService: SearchService
  ) { }

  ngOnInit(){
    localStorage.setItem('term', null);
    this.termSub = this.searchService.term.subscribe(term => this.term = term);
    this.errorSub = this.service.error.subscribe(errorMessage => this.error = errorMessage);
    this.service.sectionData.subscribe((data: ApiResponse<Location>) => this.loadLocations(data));
  }

  private loadLocations(data){
    console.log(data);
    this.locations = data.results;
    this.info = data.info;
  }

  onHandleError(){
    this.error = null;
  }

  handleRowClick(residents) {
    if (residents.length === 0) {
      return;
    }
    
    let characterNumberArray = [];
    residents.map(url => {
      let characterId = url.split("/");
      characterNumberArray.push( +characterId[5]);
    });

    this.service.getMultipleCharactersForLocation(characterNumberArray)
      .subscribe(data => this.residentNames = [...data] );
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
    this.errorSub.unsubscribe();
  }   

}
