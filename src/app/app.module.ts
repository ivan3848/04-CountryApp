import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CountryModule } from './countries/country.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
