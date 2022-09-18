import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
  // @ts-ignore
  setHTML('weather-content', appState.weather.WeatherTemplate)
}
export class WeatherDatasController {
  constructor() {
    this.getWeatherData()
    appState.on('weather', _drawWeather)
    // this.swapType()
  }
  async getWeatherData() {
    try {
      await weatherService.getWeatherData()
    } catch (error) {
      console.error(error);
    }
  }

  swapType() {
    // debugger
    weatherService.swapType()
  }

  // setInterval(swapType, 1000);
}