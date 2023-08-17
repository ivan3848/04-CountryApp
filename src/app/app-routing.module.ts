import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] =
[
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
      path: '**',
      redirectTo: 'countries'
    }
]

@NgModule({
    imports:
    [
        RouterModule.forRoot( routes )
    ],
    exports:
    [
      RouterModule
    ],
})

export class AppRoutingModule { }
