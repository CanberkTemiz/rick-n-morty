import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { SearchService } from '../services/search.service';
import { ApiResponse, Info, Location } from '../types';

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
  isLoading = null;
  error = null;
  residentNames = [];
  private subscriptions: Subscription[] = []
  
  constructor(
    private service: ApiService,
    private searchService: SearchService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(){
    localStorage.removeItem('term');
    this.subscriptions.push(this.searchService.term.subscribe(term => this.term = term))
    this.subscriptions.push(this.service.error.subscribe(errorMessage => this.error = errorMessage))
    this.subscriptions.push(this.loadingService.isLoading.subscribe(data => this.isLoading = data))    
    this.service.sectionData.subscribe((data: ApiResponse<Location>) => this.loadLocations(data));
  }

  private loadLocations(data){
    this.locations = data.results;
    this.info = data.info;
    this.loadingService.isLoading.next(false);
  }

  onHandleError(){
    this.error = null;
  }

  handleRowClick(residents) {
    console.log("redisent count: ", residents.length)
    if (residents.length === 0) {
      return;
    }
    
    let characterNumberArray = [];
    residents.map(url => {
      let characterId = url.split("/");
      characterNumberArray.push( +characterId[5]);
    });
    
    this.service.getMultipleCharactersForLocation(characterNumberArray)
      .subscribe(data => {
        console.log("multi data" , data)
        this.residentNames = data 
      });
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subs => subs.unsubscribe())
  }   
}