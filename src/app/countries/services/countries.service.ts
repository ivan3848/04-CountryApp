import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryResponse } from '../interfaces/countryResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  public getDataFromApi( filter: string, term: string): Observable<CountryResponse[]>{
    const url: string = `${this.apiUrl}/${filter}/${term}`;
    return this.http.get<CountryResponse[]>( url );
  }
}