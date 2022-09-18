import { setHTML, setText } from "../Utils/Writer.js";


export class TimesController {
  // _drawTime() {
  //   // debugger
  //   // setHTML('time', this.TimeTemplate)
  // }
  // constructor() {
  //   console.log(this.TimeTemplate);
  //   this._drawTime()
  //   // setInterval(this.TimeTemplate, 1000)
  //   setInterval(this._drawTime, 1000)
  // }

  // get TimeTemplate() {
  //   let x = new Date()
  //   let hours = x.getHours()
  //   let minutes = x.getMinutes()
  //   // let s = minutes.toString

  //   if (hours >= 13) {
  //     hours -= 12
  //   }
  //   // debugger
  //   if (minutes < 10) {
  //     // let minStr = minutes.toString
  //     // let s = `0${minStr}`
  //     return `${hours}:0${minutes}`
  //   } else {
  //     return `${hours}:${minutes}`
  //   }
  // }


  constructor() {
    this.drawTime()
    setInterval(this.drawTime, 1000)
  }

  drawTime() {
    let x = new Date()
    let hours = x.getHours()
    let meridium = 'am'
    if (hours >= 13) {
      hours -= 12
      meridium = 'pm'
    } else {
      meridium = 'am'
    }
    // if (hours = 24) {
    //   hours -= 12
    // }
    let minutes = x.getMinutes()
    let strMinutes = `${minutes}`
    if (minutes < 10) { strMinutes = `0${minutes}` }
    let end = `${hours}:${strMinutes}${meridium}`
    let y = document.getElementById('time')
    // @ts-ignore
    y.innerText = end
    // console.log('yo');
  }

}

// console.log();