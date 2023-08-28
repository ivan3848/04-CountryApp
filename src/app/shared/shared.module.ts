import { NgModule } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports:
    [
      CommonModule,
      RouterModule,
    ],
  exports:
    [
      SideBarComponent,
      SearchBoxComponent,
      TableComponent,
      LoaderComponent
    ],
  declarations:
    [
      SideBarComponent,
      SearchBoxComponent,
      TableComponent,
      LoaderComponent
    ],
  providers: [],
})
export class SharedModule { }
