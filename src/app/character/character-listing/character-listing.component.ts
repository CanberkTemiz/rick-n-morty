import { Component, Input } from '@angular/core';
import { Character } from 'src/app/types';

@Component({
  selector: 'app-character-listing',
  templateUrl: './character-listing.component.html',
  styleUrls: ['./character-listing.component.css']
})
export class CharacterListingComponent{
  @Input() character: Character;

  constructor() {}

}
