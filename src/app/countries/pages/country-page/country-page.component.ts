import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})

export class CountryPageComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    let code = this.activeRoute.params;
    console.log(code);
    throw new Error('Method not implemented.');
  }

}
