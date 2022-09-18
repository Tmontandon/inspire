
export class Quote {
  constructor(data) {
    this.author = data.author
    this.quote = data.content
  }

  get QuoteTemplate() {
    return `
          <h5 class="on-hover ">
          ${this.author}
          </h5>
          <h2>
          ${this.quote}
          </h2>
  `
  }
}