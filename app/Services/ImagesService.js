import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js";
import { bcwServer, userServer } from "./AxiosService.js"
Image
class ImagesService {
  async getImageData() {
    const res = await bcwServer.get('images')
    // console.log('res', res.data);
    appState.images = new Image(res.data)
    // console.log(appState.images, 'this is my appstate images');
  }
}

export const imagesService = new ImagesService