import { Component } from '@angular/core';
import { Todo } from './todos/todo';
import { TodoDataService } from './todos/todo-data.service';
import { CategoryDataService } from './categories/category-data.service';
import { Category } from './categories/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: Todo = new Todo();
  newCategory: Category = new Category();
  categories: Category[] = [];
  todos: Todo[] = [];
  selectedCategory: Category;
  constructor(private todoService: TodoDataService, private categoryService: CategoryDataService){}
  
  addTodo(){
    console.log(this.newTodo);
  }

  addCategory(){
    this.categoryService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }
  
  selectCategory(category: Category){
    this.selectedCategory = category;
  }

  ngOnInit(){
    console.log('onInit');
  
    var categoriesInit = [
      {name: 'Monday'},
      {name: 'Thuesday'},
      {name: 'Shopping'}
    ];
    categoriesInit.map(item => {
      this.categoryService.addCategory(new Category(item));
    });
    
    this.categories = this.categoryService.getAllCategories();
    console.log(this.categories);
  }

}
