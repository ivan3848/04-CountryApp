import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries.routing.module';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:
    [
      CountriesRoutingModule,
      SharedModule,
      CommonModule
    ],
    declarations:
    [
      ByCapitalPageComponent,
      ByCountryPageComponent,
      ByRegionPageComponent,
      CountryPageComponent,
    ],
    providers: [],
})

export class CountriesModule { }
