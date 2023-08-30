import { CountryResponse } from "./countryResponse.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: CountryResponse[];
}

export interface RegionCountries {
  region?: Region;
  countries: CountryResponse[];
}
