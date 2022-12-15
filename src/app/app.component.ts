import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataModel } from './models/weather.model';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'weather-app';


  cityName:string = "istanbul";

  constructor(private weatherService: WeatherService){}
  weatherData : WeatherDataModel | undefined;

  ngOnInit(): void {
    this.getWeatherData()
    this.cityName = ''
  }

  private getWeatherData(cityName:string = "istanbul"){

    this.weatherService.getWeatherData(cityName).subscribe(
      {
        next:(response) => {
          this.weatherData = response;
          console.log(this.weatherData);
        }
      }
    )
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = ''
    console.log(this.weatherData);
  }

}
