import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { SearchComponent } from './shared/search/search.component';
import { CharacterListingComponent } from './character/character-listing/character-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    SearchComponent,
    CharacterListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
