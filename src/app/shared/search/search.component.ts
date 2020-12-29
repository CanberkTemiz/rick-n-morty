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

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {
  @Input() type: string;
  @Output() charactersFetched = new EventEmitter();
  @ViewChild('input') input: ElementRef;
  
  searchText = '';

  constructor(private service: ApiService) {}

  ngAfterViewInit(){
    fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        filter(Boolean),
        debounceTime(900),
        distinctUntilChanged(),
        tap(() => {
          this.searchText = this.input.nativeElement.value;
          this.service.getCharacter(this.searchText).subscribe((data) => this.charactersFetched.emit(data.results))
        })
    )
    .subscribe();
  }

}
