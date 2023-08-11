import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: 
    [
        BrowserModule,
        RouterModule
    ],
    exports: 
    [
        SideBarComponent,
    ],
    declarations: 
    [
        SideBarComponent,
    ],
    providers: [],
})
export class SharedModule { }
