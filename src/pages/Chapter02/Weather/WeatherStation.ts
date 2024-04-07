/**
 * 气象站
 */
import CurrentConditionsDisplay from '@/pages/Chapter02/Weather/CurrentConditionsDisplay';
import HeatIndexDisplay from '@/pages/Chapter02/Weather/HeatIndexDisplay';
import WeatherData from '@/pages/Chapter02/Weather/WeatherData';

class WeatherStation {
  constructor() {
    const weatherData: WeatherData = new WeatherData();

    const currentDisplay = new CurrentConditionsDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);

    weatherData.removeObserver(currentDisplay);
    weatherData.setMeasurements(82, 70, 29.2);

    weatherData.removeObserver(heatIndexDisplay);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}

export default WeatherStation;
