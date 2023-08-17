import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryResponse } from '../interfaces/countryResponse.interface';

@Injectable({
  providedIn: 'root'
})


export class CountriesService {
  private url: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  private _data: CountryResponse[] = [];

  public get data(): CountryResponse[]{
    return [...this._data];
  }

  public getDataForCapital( term: string){
    this.getDataFromApi('capital', term);
  }

  private getDataFromApi( filter: string, term: string){
    let urlComplete: string = `${this.url}/${filter}/${term}`;

    this.http.get<CountryResponse>(urlComplete)
      .subscribe(result => this._data.push(result));
  }
}
