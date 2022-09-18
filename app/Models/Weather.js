import { appState } from "../AppState.js"

export class Weather {

  constructor(data) {
    // debugger
    this.kelvinTemp = data.main.temp
    this.desc = data.weather[0].main
    this.iconId = data.weather[0].icon
    this.icon = `https://openweathermap.org/img/wn/${this.iconId}.png`
  }

  get WeatherTemplate() {
    if (appState.tempName === 'n') {
      return `${this.BaseTemplate}`
    } else
      return `${this.SwapTemplate}`
  }


  get SwapTemplate() {
    return `
    <div class="me-4 text-center selectable p-2 glass rounded no-select" onclick="app.weatherDatasController.swapType()">
      <div>${appState.selectedTemp}° ${appState.tempName}</div>
      <div>${this.desc}</div>
      <img class="rounded-2"src="${this.icon}" alt="Icon">
    </div>
    `
  }

  get BaseTemplate() {
    return `
    <div class="me-4 text-center selectable p-2 glass rounded no-select" onclick="app.weatherDatasController.swapType()">
      <div>${Math.floor(((
      // @ts-ignore
      appState.weather.kelvinTemp - 273) * 1.8) + 32)}° f</div>
      <div>${this.desc}</div>
      <img class="rounded-2 "src="${this.icon}" alt="Icon">
    </div>
    `
  }
}