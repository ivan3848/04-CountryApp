import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService){}

  public countryData: CountryResponse[] = [];

  public searchByRegion( term: string){
    this.countriesService.getCountryRequest('region', term)
      .subscribe(resp => this.countryData = resp)
  }

}
