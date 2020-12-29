import { Component } from '@angular/core';
import { Character } from '../types';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  characters: Character[] = [];
  type = 'character';
  
  constructor() { }

  onCharactersFetched(data: Character[]) {
    this.characters = data;
    console.log(this.characters)
  }

}
