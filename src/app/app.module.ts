import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [AppComponent, ItemOutputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
