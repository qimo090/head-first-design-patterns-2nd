import { DisplayElement, Observer } from '@/pages/Chapter02/Weather/interface';
import WeatherData from '@/pages/Chapter02/Weather/WeatherData';

export default class HeatIndexDisplay implements Observer, DisplayElement {
  private heatIndex: number;
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(w: WeatherData) {
    this.weatherData = w;
    this.weatherData.registerObserver(this);
  }

  public update() {
    this.temperature = this.weatherData.temperature;
    this.humidity = this.weatherData.humidity;
    this.display();
  }

  public display() {
    this.heatIndex = this.computeHeatIndex(this.temperature, this.humidity);
    console.log(`Heat index is ${this.heatIndex}`);
  }

  private computeHeatIndex(temperature: number, humidity: number) {
    return (
      16.923 +
      0.185212 * temperature +
      5.37941 * humidity -
      0.100254 * temperature * humidity +
      0.00941695 * temperature * temperature +
      0.00728898 * humidity * humidity +
      0.000345372 * temperature * temperature * humidity -
      0.000814971 * temperature * humidity * humidity +
      0.0000102102 * temperature * temperature * humidity * humidity -
      0.000038646 * temperature * temperature * temperature +
      0.0000291583 * humidity * humidity * humidity +
      0.00000142721 * temperature * temperature * temperature * humidity +
      0.000000197483 * temperature * humidity * humidity * humidity -
      0.0000000218429 *
        temperature *
        temperature *
        temperature *
        humidity *
        humidity +
      0.000000000843296 *
        temperature *
        temperature *
        humidity *
        humidity *
        humidity -
      0.0000000000481975 *
        temperature *
        temperature *
        temperature *
        humidity *
        humidity *
        humidity
    );
  }
}
