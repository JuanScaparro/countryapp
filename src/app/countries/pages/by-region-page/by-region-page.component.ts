import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  searchByRegion(region: string): void {
    this.countryService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
