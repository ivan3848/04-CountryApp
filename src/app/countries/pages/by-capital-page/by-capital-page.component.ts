import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService){}

  public countryData: CountryResponse[] = [];

  public searchByCapital( term: string){
    this.countriesService.getDataFromApi('capital', term)
      .subscribe(resp => this.countryData = resp)
  }

}
