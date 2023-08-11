import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] =
[
  {
      path: "**",
      redirectTo: "Country/ByCapital"
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
