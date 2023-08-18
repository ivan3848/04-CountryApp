import { Component, Input } from '@angular/core';
import { Table } from '../../interfaces/Table.Interface';
import { CountryResponse } from 'src/app/countries/interfaces/countryResponse.interface';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  @Input()
  public data: CountryResponse[] = [];

}
