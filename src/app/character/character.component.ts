import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private termSub: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit(){
    this.termSub = this.searchService.term.subscribe(term => this.term = term); 
  }

  onCharactersFetched(data: ApiResponse<Character>) {
    this.characters = data.results;
    this.info = data.info;
  }

  onUpdateResult(data: ApiResponse<Character>) {
    console.log('new', data);
    this.characters = data.results;
    this.info = data.info;
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
  }
}
