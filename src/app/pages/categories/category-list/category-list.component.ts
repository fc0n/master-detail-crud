import { Component } from '@angular/core';

import { Category } from '../shared/cateroy.model';
import { CategoryService } from '../shared/category.service';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {

  constructor(private categoryService: CategoryService) {
    super(categoryService)
  }
}
