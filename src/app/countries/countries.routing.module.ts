import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByRegionComponent } from './components/by-region/by-region.component';

const routes: Route[] =
[
  {
      path: "country/byCapital",
      component: ByCapitalComponent
  },
  {
      path: "country/byReqgion",
      component: ByRegionComponent
  },
  {
      path: "**",
      redirectTo: "country/byCapital"
  }
]

@NgModule({
    imports:
    [
      RouterModule.forChild( routes )
    ],
    exports:
    [
      RouterModule
    ]
})

export class CountriesRoutingModule { }
