import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  weatherSearch(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe(weather => this.weather = weather);

    if (this.weather !== undefined) {
      const iconWeather = this.weather.weather;

      for (let i = 0; i < iconWeather.length; i++) {
        const element = iconWeather[i].icon;
        console.log(element)
      }

      // switch (iconWeather) {
      //   case iconWeather[0]:
      //     'https://openweathermap.org/img/wn/01n@2x.png'
      //     break;
      // }

    }
  }
}
