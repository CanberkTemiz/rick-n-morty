import { ThrowStmt } from '@angular/compiler';
import { 
  AfterViewInit,
  Component,
  ElementRef,
  Input, 
  Output, 
  EventEmitter,
  ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

import { ApiService } from 'src/app/api.service';
import { SearchService } from 'src/app/search.service';
import { ApiResponse, Character, Location } from 'src/app/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  @Input() type: string;
  @ViewChild('input') input: ElementRef;
  
  searchText = '';

  constructor(
    private service: ApiService,
    private searchService: SearchService
  ) {}

  ngAfterViewInit(){
    fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        filter(Boolean),
        debounceTime(900),
        distinctUntilChanged(),
        tap(() => {
          this.searchText = this.input.nativeElement.value;
          if ( this.searchText.length > 2) {
            this.searchService.term.next(this.searchText);
            this.fetchDataOf(this.searchText, this.type);
          }
          return;
        })
    )
    .subscribe();
  }

  fetchDataOf(term, type) {
    if (type === "character") {
      this.service.getCharacter(term)
      // this.searchService.isFetching.next(false);
      return;
    }      
    this.service.getLocation(term);
  }
}
