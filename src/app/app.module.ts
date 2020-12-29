import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { SearchComponent } from './shared/search/search.component';
import { CharacterListingComponent } from './character/character-listing/character-listing.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './location/location.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    SearchComponent,
    CharacterListingComponent,
    CharacterDetailComponent,
    LocationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
