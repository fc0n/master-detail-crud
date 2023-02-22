import {  Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Entry } from './entry.model';
import { CategoryService } from '../../categories/shared/category.service';
import { BaseResourceService } from '../../../shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(
    protected injector: Injector,
    private categoryService: CategoryService
    ) {
      super("api/entries", injector)
     }

  create(entry: Entry): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category; 
        return super.create(entry)
      })
    )
  }

  update(entry: Entry): Observable<Entry>{
     return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return super.update(entry)
      })
    )
  }

  // PRIVATE METHODS

  protected jsonDataToResources(jsonData: any[]): Entry[]{
    const entries: Entry[] = [];
    jsonData.forEach(element => {
      const entry = Entry.formJson(element);
      entries.push(entry);
    });
    return entries;
  }

  protected jsonDataTooResource(jsonData: any): Entry{
    return Entry.formJson(jsonData);
  }
}