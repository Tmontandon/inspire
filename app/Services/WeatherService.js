import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { bcwServer } from "./AxiosService.js"


class WeatherService {
  constructor() { }

  async getWeatherData() {
    const res = await bcwServer.get('weather')
    appState.weather = new Weather(res.data)
    // console.log(res.data);
  }
  swapType() {
    if (appState.tempName === 'c') {
      // debugger
      // @ts-ignore
      appState.selectedTemp = Math.floor(((appState.weather.kelvinTemp - 273) * 1.8) + 32)
      appState.tempName = 'f'
    } else {
      // @ts-ignore
      appState.selectedTemp = Math.floor(appState.weather.kelvinTemp - 273.15)
      appState.tempName = 'c'
    }
    appState.emit('weather')
  }
}

export const weatherService = new WeatherService