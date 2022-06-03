import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPlatilloRoutingModule } from './add-platillo-routing.module';
import { AddPlatilloComponent } from './add-platillo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPlatilloComponent
  ],
  imports: [
    CommonModule,
    AddPlatilloRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddPlatilloModule { }
