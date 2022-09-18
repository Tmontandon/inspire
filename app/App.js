import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherDatasController } from "./Controllers/WeatherDatasController.js";

class App {
  // valuesController = new ValuesController();
  imagesController = new ImagesController

  quotesController = new QuotesController

  weatherDatasController = new WeatherDatasController

  timesController = new TimesController

  todosController = new TodosController
}

window["app"] = new App();
