import { NgModule } from '@angular/core';
import { CountriesRoutingModule } from './countries.routing.module';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';

@NgModule({
    imports:
    [
      CountriesRoutingModule
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

export class CountryModule { }
