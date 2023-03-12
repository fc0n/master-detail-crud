import { NgModule } from '@angular/core';

import { ChartModule } from "primeng/chart";

import { SharedModule } from '../../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';

import { GraphicComponent } from './graphic/graphic.component';

@NgModule({
  declarations: [ GraphicComponent ],
  imports: [
    SharedModule,
    ReportsRoutingModule,
    ChartModule
  ]
})
export class ReportsModule { }
