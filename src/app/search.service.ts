import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: "root"})

export class SearchService {
    term = new Subject<string>();
}