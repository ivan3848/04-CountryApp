import { Component } from '@angular/core';
import { SideBarOption } from 'src/app/interfaces/SideBarOption.Interface';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {

  public options: SideBarOption[] = 
  [
  ];
}
