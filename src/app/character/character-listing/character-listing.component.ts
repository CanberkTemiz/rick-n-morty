import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/types';

@Component({
  selector: 'app-character-listing',
  templateUrl: './character-listing.component.html',
  styleUrls: ['./character-listing.component.css']
})
export class CharacterListingComponent implements OnInit {
  @Input() character: Character;

  constructor() {}

  ngOnInit(): void {
    console.log(this.character);
  }

}
