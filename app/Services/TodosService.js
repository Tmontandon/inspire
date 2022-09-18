import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { Pop } from "../Utils/Pop.js"
import { putUserServer, userServer } from "./AxiosService.js"



class TodosService {


  constructor() { }

  async changeTodoStatus(id) {
    // debugger
    let todo = appState.todos.find(t => t.id == id)
    todo.completed = !todo.completed
    // const res = 
    await putUserServer.put(`/${id}`, todo)
    // const swappedStatus = new Todo(res.data)
    // const index = appState.todos.findIndex((t) => t.id == id)
    // appState.todos.splice(index, 1, swappedStatus)
    appState.emit('todos')
  }
  async makeTodo(formData) {
    // debugger
    const res = await userServer.post('todos', formData)
    appState.todos = [...appState.todos, new Todo(res.data)]
  }

  async getTodos() {
    const res = await userServer.get('todos')
    appState.todos = res.data.map(t => new Todo(t))
    // console.log(res.data);
  }
  async removeTodos(id) {
    const yes = await Pop.confirm('Remove This ToDo?')
    if (!yes) { return }
    await userServer.delete(`todos/${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
    console.log('ye');
  }
}


export const todosService = new TodosService