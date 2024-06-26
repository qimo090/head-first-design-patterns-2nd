import { Observer, Subject } from '@/pages/Chapter02/Weather/interface';

class WeatherData implements Subject {
  private observers: Observer[] = [];
  public temperature: number;
  public humidity: number;
  public pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public removeObserver(o: Observer) {
    const i = this.observers.indexOf(o);

    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }

  public notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

export default WeatherData;
