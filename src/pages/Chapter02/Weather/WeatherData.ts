abstract class WeatherData {
  getTemperature() {
    return '';
  }

  getHumidity() {
    return '';
  }

  getPressure() {
    return '';
  }

  /**
   * 任何时候气象测量被更新
   * 这个方法被调用
   */
  public measurementsChanged() {
    const temperature = this.getTemperature();
    const humidity = this.getHumidity();
    const pressure = this.getPressure();

    console.log(temperature, humidity, pressure);
    // this.currentConditionsDisplay.update(temperature, humidity, pressure);
    // this.statisticsDisplay.update(temperature, humidity, pressure);
    // this.forecastDisplay.update(temperature, humidity, pressure);
  }
}

export default WeatherData;
