import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<WeatherForecast[]>(baseUrl + 'home').subscribe(result => {
          console.log(result);
          alert(result);
          debugger;
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  Id: number;
  TitleApplication: string;
  ApplicationId: number; 
}
