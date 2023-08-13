import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] =
[
    {
        path: '**',
        redirectTo: 'Country'
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
