import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL  = "https://rickandmortyapi.com/api";

  constructor(private httpClient: HttpClient) { }

  getCharacter(term) {
    return this.httpClient
      .get<any>(`${this.apiURL}/character/?name=${term}`)
  }
}
