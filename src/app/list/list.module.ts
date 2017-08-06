import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ListComponent} from "./list.component";

@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
})
export class ListModule {
}
