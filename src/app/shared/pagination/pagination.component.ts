import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SearchService } from 'src/app/services/search.service';
import { ApiResponse,  Info } from 'src/app/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() info: Info
  @Input() term: string
  @Input() type: string
  
  constructor(
    private service: ApiService
  ) { }

  getPrevOrNextPage(page) {
    this.service.getPrevOrNextPage(page);
  }

  getExactPage(num) {
    this.service.getExactPage(num, this.term, this.type);
  }

  // to create page buttons for pagination
  pages(n: number): Array<number> {
    return Array(n);
  }
}
