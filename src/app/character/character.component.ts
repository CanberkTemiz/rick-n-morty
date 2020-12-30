import { Component } from '@angular/core';
import { ApiResponse, Character, Info } from '../types';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  characters: Character[] = [];
  type = 'character';
  info: Info;
  term: string;

  constructor() { }

  onCharactersFetched(data: ApiResponse<Character>) {
    console.log(data);
    this.characters = data.results;
    this.info = data.info;
  }

  onUpdateResult(data: ApiResponse<Character>) {
    console.log('new', data);
    this.characters = data.results;
    this.info = data.info;
  }

  //change with subjects
  setTerm(term) {
    this.term = term;
  }

}
