import { Injectable } from '@angular/core';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {
  lastId:number = 0;
  categories: Category[] = [];

  addCategory(category: Category){
    if(!category.id){
      category.id = ++this.lastId;
    }
    this.categories.push(category);
  }

  getAllCategories(): Category[] | any{
    return this.categories;
  }

}
