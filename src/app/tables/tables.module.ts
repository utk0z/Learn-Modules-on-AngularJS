import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiograpyComponent } from './biograpy/biograpy.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    TablesHomeComponent,
    TableComponent,
    BiograpyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
