import { query } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
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
  error = null;
  isFetching = false;
  result;
  private termSub: Subscription;
  private errorSub: Subscription;
  
  constructor(
    private service: ApiService,
    private searchService: SearchService,
    private authService: AuthService
  ) { }

  ngOnInit(){
    if(localStorage.getItem('term')){
      this.term = localStorage.getItem('term');
      this.service.getPreviousSearchedQuery(this.term).subscribe(data => {
        this.loadCharacters(data)
      })
    }
    this.termSub = this.searchService.term.subscribe(term => this.term = term); 
    this.errorSub = this.service.error.subscribe(errorMessage => this.error = errorMessage);
    
    this.isFetching = true;
    this.service.sectionData.subscribe(
      (data: ApiResponse<Character>) => {
        this.isFetching = false;
        this.loadCharacters(data)
    });
  }

  private loadCharacters(data) {
    this.characters = data.results;
    this.info = data.info;
  }

  onHandleError(){
    this.error = null;
  }

  onClickToAnyCard(){
    this.authService.login();
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
    this.errorSub.unsubscribe();
    this.term = ''
  }
}
