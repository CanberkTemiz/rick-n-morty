import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from 'src/app/services/api.service';
import { Character } from 'src/app/types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  characterDetails: Character;
  id: number;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private _location: Location,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.login();
    this.getDetail();
  }

  getDetail() {
    this.route.params.subscribe(data => this.id = +data.id )

    this.service.getCharacterDetail(this.id).subscribe(res => this.characterDetails = res);
  }

  backClicked() {
    this._location.back();
  }

}
