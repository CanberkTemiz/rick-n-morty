import { 
  Component,
  ElementRef,
  Input, 
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() type: string;
  @ViewChild('input') input: ElementRef;
  
  searchText = '';

  constructor() {}

}
