import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from '../search.service';
import { ApiResponse, Character, Info } from '../types';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy{
  isFetching$: Observable<boolean>;
  characters: Character[] = [];
  type = 'character';
  info: Info;
  term: string;
  isFetching = false;
  private termSub: Subscription;

  
  constructor(private searchService: SearchService) { }

  ngOnInit(){
    this.termSub = this.searchService.term.subscribe(term => this.term = term); 
    this.isFetching$ = this.searchService.isFetching;
  }

  onCharactersFetched(data: ApiResponse<Character>) {
    this.loadCharacter(data);
  }

  onUpdateResult(data: ApiResponse<Character>) {
    this.loadCharacter(data);
  }

  private loadCharacter(data) {
    this.characters = data.results;
    this.info = data.info;
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
  }
}
