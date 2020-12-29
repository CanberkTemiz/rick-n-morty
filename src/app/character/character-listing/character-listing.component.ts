import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-listing',
  templateUrl: './character-listing.component.html',
  styleUrls: ['./character-listing.component.css']
})
export class CharacterListingComponent implements OnInit {

  @Input() character: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.character);
  }

}
