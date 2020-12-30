import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Character, Location } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL  = "https://rickandmortyapi.com/api";

  constructor(private httpClient: HttpClient) { }

  getCharacter(term) {
    return this.httpClient.get<ApiResponse<Character>>(`${this.apiURL}/character/?name=${term}`)
  }

  getCharacterDetail(id) {
    return this.httpClient.get<Character>(`${this.apiURL}/character/${id}`)
  }

  getLocation(term) {
    return this.httpClient.get<ApiResponse<Location>>(`${this.apiURL}/location/?name=${term}`);
  }

  getPrevOrNextPage(link) {
    // if (type === "character") {
    //   return this.httpClient.get<ApiResponse<Character>>(`${link}`);
    // }
    return this.httpClient.get<ApiResponse<any>>(`${link}`);
  }

  getExactPage(idx, term, type) {
      return this.httpClient.get<ApiResponse<any>>(`${this.apiURL}/${type}/?page=${idx}&name=${term}`);
  }
}
