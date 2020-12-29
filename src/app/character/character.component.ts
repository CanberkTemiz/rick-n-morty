import { Component } from '@angular/core';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  response = [];
  type = 'character';
  
  constructor() { }

  onCharactersFetched(data: any) {
    this.response = data;
    console.log(this.response)
  }

}
