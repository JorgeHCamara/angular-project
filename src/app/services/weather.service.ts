import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/weather-enviroment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`https://open-weather13.p.rapidapi.com/city/${cityName}`, {
      headers: new HttpHeaders()
      .set(enviroment.XRapidAPIHostHeaderName,
        enviroment.XRapidAPIHostHeaderValue)
      .set(enviroment.XRapidAPIKeyHeaderName,
        enviroment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
