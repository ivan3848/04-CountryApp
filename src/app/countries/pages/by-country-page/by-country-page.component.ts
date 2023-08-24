import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService){}

  public countryData: CountryResponse[] = [];

  public searchByCountry( term: string){
    this.countriesService.getCountryRequest('name', term)
      .subscribe(resp => this.countryData = resp);
  }



}
