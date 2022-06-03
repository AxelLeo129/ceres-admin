import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPlatilloRoutingModule } from './edit-platillo-routing.module';
import { EditPlatilloComponent } from './edit-platillo.component';


@NgModule({
  declarations: [
    EditPlatilloComponent
  ],
  imports: [
    CommonModule,
    EditPlatilloRoutingModule
  ]
})
export class EditPlatilloModule { }
