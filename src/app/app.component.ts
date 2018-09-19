import { Component } from '@angular/core';
import { CategoryDataService } from './categories/category-data.service';
import { Category } from './categories/category';
import { TodoDataService } from './todos/todo-data.service';
import { Todo } from './todos/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: Category;
  newCategory: Category = new Category();
  newTodo: Todo = new Todo();
  constructor(private categoryService: CategoryDataService, private todoService: TodoDataService){}
  
  get categories(){
    return this.categoryService.getAllCategories();
  }

  get todosByCat(){
    return this.todoService.getTodosByCat(this.selectedCategory.id);
  }

  countTodosByCat(id: number){
    return this.todoService.getTodosByCat(id).length;
  }

  onSelect(category: Category){
    this.selectedCategory = category;
  }

  addCategory(){
    this.categoryService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  addTodo(){
    this.newTodo.category = this.selectedCategory.id;
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodo(todo: Todo){
    this.todoService.toggleTodo(todo);
  }

  removeTodo(todo: Todo){
    this.todoService.deleteTodo(todo.id);
  }

  ngOnInit(){
    this.categoryService.addCategory(new Category({name: 'work'}));
    this.categoryService.addCategory(new Category({name: 'angular'}));
    this.categoryService.addCategory(new Category({name: 'vue'}));
    this.categoryService.addCategory(new Category({name: 'forms'}));

    this.todoService.addTodo(new Todo({title: 'work1', category: 3, id:1, complete: true}));
    this.todoService.addTodo(new Todo({title: 'work2', category: 2, id:2, complete: true}));
    this.todoService.addTodo(new Todo({title: 'work3', category: 2, id:3}));
  }

}
