import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {WeatherDataModel} from './models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherDataBaseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

  XRapidAPIKeyLabel = 'X-RapidAPI-Key';
  XRapidAPIKeyValue = '128940448cmsh237e9e3ff765ee1p178016jsn9097a09d513c';
  XRapidAPIHostLabel = 'X-RapidAPI-Host';
  XRapidAPIHostValue = 'weather-by-api-ninjas.p.rapidapi.com';


  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) : Observable<WeatherDataModel>{
    return this.http.get<WeatherDataModel>(this.weatherDataBaseUrl, {
      headers: new HttpHeaders().set(this.XRapidAPIKeyLabel, this.XRapidAPIKeyValue).set(this.XRapidAPIHostLabel, this.XRapidAPIHostValue),
      params: new HttpParams().set('city', cityName)
    });
  }
}
