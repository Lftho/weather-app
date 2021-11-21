import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private httpApiUrl: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', environment.apiKey);

    // console.log('dados', city)
    // console.log('dados', options)


    return this.httpApiUrl.get<Weather>(environment.apiUrl +
      'weather', { params: options });
  }
}
