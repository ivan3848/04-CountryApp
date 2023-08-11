import { NgModule } from '@angular/core';
import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByRegionComponent } from './components/by-region/by-region.component';
import { CountriesRoutingModule } from './countries.routing.module';

@NgModule({
    imports:
    [
      CountriesRoutingModule
    ],
    exports:
    [
      CountriesRoutingModule
    ],
    declarations: [ByCapitalComponent, ByRegionComponent],
    providers: [],
})

export class CountryModule { }
