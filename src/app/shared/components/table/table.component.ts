import { Component, Input } from '@angular/core';
import { Table } from '../../interfaces/Table.Interface';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  @Input()
  public data: Table[] = [];

  public headerItemList: string[] = [];

}
