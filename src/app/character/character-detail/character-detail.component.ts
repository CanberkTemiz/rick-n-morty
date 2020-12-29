import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Character } from 'src/app/types';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characterDetails: Character;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCharacterDetail(id)
      .subscribe(res => this.characterDetails = res);
  }

}
