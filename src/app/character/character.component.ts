import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { SearchService } from '../search.service';
import { ApiResponse, Character, Info } from '../types';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy{
  characters: Character[] = [];
  type = 'character';
  info: Info;
  term: string;
  isFetching = false;
  private termSub: Subscription;
  private fetchSub: Subscription;
  
  constructor(
    private service: ApiService,
    private searchService: SearchService,
  ) { }

  ngOnInit(){
    this.termSub = this.searchService.term.subscribe(term => this.term = term); 
    this.fetchSub = this.searchService.isFetching.subscribe(data => this.isFetching = data);

    this.service.sectionData.subscribe((data: ApiResponse<Character>) => this.loadCharacters(data));
  }

  private loadCharacters(data) {
    this.characters = data.results;
    this.info = data.info;
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
    this.fetchSub.unsubscribe();
  }
}
