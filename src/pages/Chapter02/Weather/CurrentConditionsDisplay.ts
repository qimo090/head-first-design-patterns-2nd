import { DisplayElement, Observer } from '@/pages/Chapter02/Weather/interface';
import WeatherData from '@/pages/Chapter02/Weather/WeatherData';

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update() {
    this.temperature = this.weatherData.temperature;
    this.humidity = this.weatherData.humidity;
    this.display();
  }

  public display() {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`,
    );
  }
}

export default CurrentConditionsDisplay;
