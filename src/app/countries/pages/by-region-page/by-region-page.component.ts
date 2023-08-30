import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countryData = this.countriesService.countryStoreData.byRegion.countries;
    this.selectedRegion = this.countriesService.countryStoreData.byRegion.region;
  }

  public countryData: CountryResponse[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  public searchByRegion(region: Region) {
    this.selectedRegion = region;

    this.countriesService.getCountryRequest('region', region)
      .subscribe((resp: CountryResponse[]) => this.countryData = resp)
  }

}
