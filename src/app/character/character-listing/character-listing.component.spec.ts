import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListingComponent } from './character-listing.component';

describe('CharacterListingComponent', () => {
  let component: CharacterListingComponent;
  let fixture: ComponentFixture<CharacterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
