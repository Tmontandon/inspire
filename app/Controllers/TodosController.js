import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
  let template = ''
  appState.todos.forEach(t => template += t.TodoItemTemplate)
  setHTML('todo-list', template)
  console.log(appState.todoLeft)
  // @ts-ignore
  appState.todoLeft = appState.todos.length
  console.log(appState.todoLeft);
  // _drawTodosLeft()
}

function _drawTodosLeft() {
  // debugger
  // @ts-ignore
  appState.todoLeft = appState.todos.length
  appState.todos.forEach(t => {
    if (t.completed == true) {
      // @ts-ignore
      appState.todoLeft -= 1
    }
  })

  setText('todos-left', appState.todoLeft)
}


export class TodosController {

  constructor() {
    this.getTodos()
    appState.on('todos', _drawTodos)
    appState.on('todos', _drawTodosLeft)
    _drawTodosLeft()
  }

  async makeTodo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      await todosService.makeTodo(formData)
      // console.log('fomr is making the thing');
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error);
    }
  }

  async changeTodoStatus(id) {
    // debugger
    try {
      await todosService.changeTodoStatus(id)
      // console.log('yo');
    } catch (error) {
      console.error(error);
    }
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error);
    }
  }

  async removeTodo(id) {
    try {
      await todosService.removeTodos(id)
    } catch (error) {
      console.error(error);
    }
  }

}


// let TodosLeftTemplate = `${appState.todoLeft}`
