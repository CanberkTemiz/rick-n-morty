import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';
import { SearchService } from '../services/search.service';
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
  isLoading = false;
 

  private termSub: Subscription;
  private loadingSub: Subscription;
  private errorSub: Subscription;
  
  constructor(
    private service: ApiService,
    private searchService: SearchService,
    private authService: AuthService,
    private loadingService: LoadingService
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
    this.loadingService.isLoading$.subscribe(data => this.isLoading = data);
    
    this.service.sectionData.subscribe(
      (data: ApiResponse<Character>) => {
        this.loadCharacters(data)
        this.loadingService.isLoading$.next(false);
    });
  }

  private loadCharacters(data) {
    this.characters = data.results;
    this.info = data.info;
  }

  onHandleError(){
    this.error = null;
    localStorage.removeItem('term');
  }

  ngOnDestroy(){
    this.termSub.unsubscribe();
    this.errorSub.unsubscribe();

    this.term = ''
  }
}
