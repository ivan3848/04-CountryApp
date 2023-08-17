import { Component } from '@angular/core';
import { SideBarOption } from 'src/app/shared/interfaces/SideBarOption.Interface';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {

  public options: SideBarOption[] =
  [
    {
      path: '/countries/by-capital',
      option: 'Capital'
    },
    {
      path: '/countries/by-region',
      option: 'Region'
    },
    {
      path: '/countries/by-country',
      option: 'Country'
    }
  ];
}
