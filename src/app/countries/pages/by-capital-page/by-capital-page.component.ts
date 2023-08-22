import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Table } from 'src/app/shared/interfaces/Table.Interface';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService){}

  public tableData: Table[] = [];
  public countryData: CountryResponse[] = [];

  public searchByCapital( term: string){
    this.tableData = [];
    let itemsOfHeader: string[] = [];

    this.countriesService.getDataFromApi('capital', term)
      .subscribe(result => this.countryData = result);

      alert(this.countryData);
      console.log(this.countryData);

    this.countryData.some(item => {
        itemsOfHeader.push(item.flag);
      });

    this.tableData.push({
      header: 'Flag',
      headerItemList: itemsOfHeader
    });

    itemsOfHeader = [];

    this.countryData.some(item => {
      itemsOfHeader.push(item.capital.toString());
    });

    this.tableData.push({
      header: 'Capital',
      headerItemList: itemsOfHeader
    });

    itemsOfHeader = [];

    this.countryData.some(item => {
      itemsOfHeader.push(item.name.common);
    });

    this.tableData.push({
      header: 'Country',
      headerItemList: itemsOfHeader
    });

    itemsOfHeader = [];

    this.countryData.some(item => {
      itemsOfHeader.push(item.population.toString());
    });

    this.tableData.push({
      header: 'Population',
      headerItemList: itemsOfHeader
    });
  }

}
