export class Image {
  constructor(data) {
    // debugger
    this.largeUrl = data.largeImgUrl
    this.author = data.author
  }


  get AuthorTemplate() {
    return `
    <h6 class="text-shadow">${this.author} - pixabay.com</h6>
    `
  }
}