import { Injectable } from '@angular/core';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId:number = 0;
  todos: Todo[] = [];
  
  addTodo(todo: Todo){
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
  }

  getTodosByCat(id: number): Todo[] | any{
    return this.todos.filter(todo => todo.category === id);
  }

  getTodoById(id: number): Todo | any{
    return this.todos.filter(todo => todo.id === id).pop();
  }

  updateTodoById(id: number, values: Object = {}): Todo | any{
    const todo = this.getTodoById(id);
    if(!todo){
      return this;
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodo(todo: Todo){
    const updatedTodo = this.updateTodoById(todo.id, {complete: !todo.complete});
    return updatedTodo;
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
