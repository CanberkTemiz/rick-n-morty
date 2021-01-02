import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from './search.service';
import { ApiResponse, Character, Location } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  
  sectionData = new Subject<ApiResponse<any>>();
  error = new Subject<string>();

  private apiURL = "https://rickandmortyapi.com/api";

  constructor(
    private httpClient: HttpClient,
    private searchService: SearchService
  ) { }

  getCharacter(term) {
    this.httpClient
      .get<ApiResponse<Character>>(`${this.apiURL}/character/?name=${term}`)
      .subscribe(
        data => this.sectionData.next(data), 
        error => this.error.next(error.message)
      );
  }

  getCharacterDetail(id) {
    return this.httpClient.get<Character>(`${this.apiURL}/character/${id}`)
  }

  getLocation(term) {
    this.httpClient
      .get<ApiResponse<Location>>(`${this.apiURL}/location/?name=${term}`)
      .subscribe(
        data => this.sectionData.next(data),
        error => this.error.next(error.message)
      );
  }

  getPrevOrNextPage(link) {
    this.httpClient
      .get<ApiResponse<any>>(`${link}`)
      .subscribe(data => this.sectionData.next(data));
  }

  getExactPage(idx, term, type) {
    this.httpClient
      .get<ApiResponse<any>>(`${this.apiURL}/${type}/?page=${idx}&name=${term}`)
      .subscribe(data => this.sectionData.next(data))
  }
}
