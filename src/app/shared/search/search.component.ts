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

import { ApiService } from 'src/app/services/api.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SearchService } from 'src/app/services/search.service';

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
    private searchService: SearchService,
    private loadingService: LoadingService
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
            this.loadingService.isLoading.next(true);
            this.searchService.term.next(this.searchText);
            this.fetchDataOf(this.searchText, this.type);
          }
        })
    )
    .subscribe();
  }

  fetchDataOf(term, type) {
    if (type === "character") {
      this.service.getCharacter(term)
      return;
    }      
    this.service.getLocation(term);
  }
}
