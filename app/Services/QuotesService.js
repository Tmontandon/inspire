import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { bcwServer } from "./AxiosService.js"

class QuotesService {

  constructor() {
  }

  async getQuoteData() {
    const res = await bcwServer.get('quotes')
    appState.quote = new Quote(res.data)
    // console.log(appState.quote);
  }

}

export const quotesService = new QuotesService