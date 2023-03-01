import { NgModule } from '@angular/core';

import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntriesRoutingModule } from './entries-routing.module';

import { BreadCrumbComponent } from 'src/app/shared/components/bread-crumb/bread-crumb.component';
import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ 
    EntryListComponent,
    EntryFormComponent
   ],
  imports: [
    SharedModule,
    EntriesRoutingModule,
    CalendarModule,
    IMaskModule
  ]
})
export class EntriesModule { }
