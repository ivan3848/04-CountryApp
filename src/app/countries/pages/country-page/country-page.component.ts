import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})

export class CountryPageComponent implements OnInit {

  public country?: CountryResponse;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountriesService
  ){}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap( ({ code }) => this.countryService.getCountryRequest('alpha', code))
      )
      .subscribe( country =>
        {
          console.log(country);
          if(!country.length){
            return this.router.navigateByUrl('/countries/');
          }

          else{
            return this.country = country[0];
          }
  });

  }

}
