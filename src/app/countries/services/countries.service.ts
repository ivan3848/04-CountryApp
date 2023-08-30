import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryResponse } from '../interfaces/countryResponse.interface';
import { Observable, catchError, delay, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cacheStore.interface';
import { Region } from '../interfaces/region.type';
import { table } from '../interfaces/table.type';

@Injectable({
  providedIn: 'root'
})


export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {
    this.loadCountryData();
  }

  private saveCountryData(): void {
    localStorage.setItem('countryData', JSON.stringify(this.countryStoreData));
  }

  private loadCountryData(): void {
    let data = localStorage.getItem('countryData');

    if (!data) return;

    this.countryStoreData = JSON.parse(data);
  }

  public countryStoreData: CacheStore = {
    byCountries: {
      term: '',
      countries: []
    },
    byCapital: {
      term: '',
      countries: []
    },
    byRegion: {
      region: undefined,
      countries: []
    }
  }

  public getCountryRequest(table: table, term: string | Region): Observable<CountryResponse[]> {
    const url: string = `${this.apiUrl}/${table}/${term}`;

    return this.http.get<CountryResponse[]>(url)
      .pipe(
        tap(countries => {
          switch (table) {
            case 'capital':
              this.countryStoreData.byCapital = { term, countries };
              this.saveCountryData();
              break;
            case 'name':
              this.countryStoreData.byCountries = { term, countries };
              this.saveCountryData();
              break;
            case 'region':
              this.countryStoreData.byRegion.countries = countries;
              this.countryStoreData.byRegion.region = term as Region;
              this.saveCountryData();
              break;
          }
        }),
        catchError(error => of([]))
      );
  }

}
