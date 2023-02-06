import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import toastr from 'toastr';

import { Category } from '../shared/cateroy.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  categoryForm: FormGroup;
  currentAction: string;
  pageTitle: string;
  serveErrorMessages: string[] = null;
  submittingForm: boolean = false;
  category: Category = new Category()

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  // PRIVATE METHODS

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == 'new'){
      this.currentAction = 'new'
    } else {
      this.currentAction = 'edit'
    }
  }

  private buildCategoryForm(){
    this.categoryForm = this.formbuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      describe: [null]
    })
  }

  private loadCategory(){
    if(this.currentAction == "edit"){
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get('id')))
      ).subscribe((category) => {
        this.category = category;
        this.categoryForm.patchValue(this.category) // binds loaded category data to CategoryForm
      }),
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde')
    }
  }

  private setPageTitle(){
    if( this.currentAction == 'new'){
      this.pageTitle = 'Castro de Nova Categoria'
    } else {
      const categoryName = this.category.name || ''
      this.pageTitle = 'Editando Categoria: ' + categoryName;
    }
  }
}
