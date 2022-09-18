import { appState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
  }


  get TodoItemTemplate() {
    return `
    <div class="mt-2 p-1 w-100 bg-light Iamsomad rounded">
      <!-- NOTE Make onchange: do an put request, edit how many are left -->
      <input onchange="app.todosController.changeTodoStatus('${this.id}')" class="ms-2" type="checkbox" ${this.completed ? 'checked' : ''}>
      <i onclick="app.todosController.removeTodo('${this.id}')" class="mdi mdi-close text-danger selectable rounded" title="Remove"></i>
      <span class="text-dark">${this.description}</span>
    </div>
`
  }


}


//  <div class="d-flex justify-content-between">
//       <span class="text-dark ">ToDo</span>
//       <!-- NOTE Make however many are left -->
      // <span class="text-dark text-end">${appState.todoLeft} Left</span>
//     </div>
//     <div class="d-flex justify-content-between">
      // <div class="mt-2 p-1 w-100 bg-light Iamsomad rounded">
      //   <!-- NOTE Make onchange: do an put request, edit how many are left -->
      //   <input onchange="" class="ms-2" type="checkbox">
      //   <i onclick="app.todosController.removeTodo('${this.id}')" class="mdi mdi-close text-danger selectable rounded" title="Remove"></i>
      //   <span class="text-dark">${this.description}</span>
      // </div>
//     </div>
//     <!--NOTE submit does a post request-- >
//   <form onsubmit="" class="py-2">
//     <div class="form-group d-flex justify-content-center p-1">
//       <input class="form-control square-right" type="text" name="todoItem" placeholder="Add ToDo"
//         required />
//       <label for="todoItem" class="visually-hidden"></label>
//       <button class="btn btn-dark square-left" type="submit"><i class="mdi mdi-plus"></i></button>
//     </div>
//   </form>