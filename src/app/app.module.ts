import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
