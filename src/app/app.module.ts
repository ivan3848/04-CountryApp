import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ByCapitalComponent } from './countries/components/by-capital/by-capital.component';
import { ByRegionComponent } from './countries/components/by-region/by-region.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
