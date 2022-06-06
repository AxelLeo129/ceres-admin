import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInfoRoutingModule } from './add-info-routing.module';
import { AddInfoComponent } from './add-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddInfoComponent
  ],
  imports: [
    CommonModule,
    AddInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddInfoModule { }
