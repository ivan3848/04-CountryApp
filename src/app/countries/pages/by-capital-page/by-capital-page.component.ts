import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Table } from 'src/app/shared/interfaces/Table.Interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService){}

  public tableData: Table[] = [];

  public getTerm( term: string){
    this.tableData = [];
    this.countriesService.getDataForCapital(term);
    this.mapCuntriesToTable();
  }

  public mapCuntriesToTable(){
    let itemsOfHeader: string[] = [];
    console.log(this.countriesService.data);

    this.countriesService.data.some(item => {
        itemsOfHeader.push(item.flag);
        console.log(item);
      })
    this.tableData.push({
      header: 'flag',
      headerItemList: itemsOfHeader
    });

    console.log(itemsOfHeader);

    itemsOfHeader = [];
    this.countriesService.data.some(item => itemsOfHeader.push(item.name.common))
    this.tableData.push({
      header: 'Country',
      headerItemList: itemsOfHeader
    });

    itemsOfHeader = [];
    this.countriesService.data.map(item => itemsOfHeader.push(item.capital[0]))
    this.tableData.push({
      header: 'Capital',
      headerItemList: itemsOfHeader
    });

    itemsOfHeader = [];
    this.countriesService.data.map(item => itemsOfHeader.push(item.population.toString()))
    this.tableData.push({
      header: 'Population',
      headerItemList: itemsOfHeader
    });

  }

}
