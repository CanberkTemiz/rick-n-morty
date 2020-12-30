import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { ApiResponse, Character, Location } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  private apiURL  = "https://rickandmortyapi.com/api";

  constructor(
    private httpClient: HttpClient,
    private searchService: SearchService
  ) { }

  getCharacter(term) {
    this.isFetching();
    return this.httpClient.get<ApiResponse<Character>>(`${this.apiURL}/character/?name=${term}`)
  }

  getCharacterDetail(id) {
    this.isFetching();
    return this.httpClient.get<Character>(`${this.apiURL}/character/${id}`)
  }

  getLocation(term) {
    this.isFetching();
    return this.httpClient.get<ApiResponse<Location>>(`${this.apiURL}/location/?name=${term}`);
  }

  getPrevOrNextPage(link) {
    this.isFetching();
    return this.httpClient.get<ApiResponse<any>>(`${link}`);
  }

  getExactPage(idx, term, type) {
    this.isFetching();
    return this.httpClient.get<ApiResponse<any>>(`${this.apiURL}/${type}/?page=${idx}&name=${term}`);
  }

  private isFetching(){
    return this.searchService.isFetching.next(true);
  }
}
