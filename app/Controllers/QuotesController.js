import { appState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"
import { setHTML } from "../Utils/Writer.js"


function _drawQuote() {
  // @ts-ignore
  setHTML('quote-content', appState.quote.QuoteTemplate)
}
export class QuotesController {
  constructor() {
    this.getQuoteData()
    appState.on('quote', _drawQuote)
  }

  async getQuoteData() {
    try {
      await quotesService.getQuoteData()
    } catch (error) {
      console.error(error)
    }
  }
}