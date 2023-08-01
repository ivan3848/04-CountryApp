import { NgModule } from '@angular/core';
import { Route } from '@angular/router';

const routes: Route[] = 
[
    {
        path: "**",
        component: Count
    }
]

@NgModule({
    imports: [],
    exports: [],
    providers: [],
})
export class CountriesModule { }
