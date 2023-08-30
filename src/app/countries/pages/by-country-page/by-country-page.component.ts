import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countryData = this.countriesService.countryStoreData.byCountries.countries;
    this.term = this.countriesService.countryStoreData.byCountries.term;
  }

  public countryData: CountryResponse[] = [];
  public term: string = '';

  public searchByCountry( term: string){
    this.countriesService.getCountryRequest('name', term)
      .subscribe(resp => this.countryData = resp);
  }



}
