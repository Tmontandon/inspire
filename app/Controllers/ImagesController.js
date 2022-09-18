import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { setHTML } from "../Utils/Writer.js";

function _draw() {
  // @ts-ignore
  document.querySelector('body').style.backgroundImage = `url('${appState.images.largeUrl}')`
  // @ts-ignore
  setHTML('author', appState.images.AuthorTemplate)
}

export class ImagesController {

  constructor() {
    this.getImageData()
    appState.on('images', _draw)
  }
  async getImageData() {
    try {
      imagesService.getImageData()
    } catch (error) {
      console.error("getImageData", error);
    }
  }

}