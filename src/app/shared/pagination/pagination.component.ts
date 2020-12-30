import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ApiResponse, Character, Info, Location } from 'src/app/types';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() info: Info
  @Input() term: string
  @Input() type: string
  @Output() updatedData = new EventEmitter<ApiResponse<any>>();
  
  constructor(private service: ApiService) { }

  // when next or prev clicked
  getPrevOrNextPage(page) {
    this.service.getPrevOrNextPage(page).subscribe(data => {
      this.updatedData.emit(data)
    });
  }

  getExactPage(num) {
    this.service.getExactPage(num, this.term, this.type).subscribe(data => {
      this.updatedData.emit(data)
    })
  }

  // to create page buttons for pagination
  pages(n: number): Array<number> {
    return Array(n);
  }

}
