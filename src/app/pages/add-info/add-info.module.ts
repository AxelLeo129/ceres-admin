import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInfoRoutingModule } from './add-info-routing.module';
import { AddInfoComponent } from './add-info.component';


@NgModule({
  declarations: [
    AddInfoComponent
  ],
  imports: [
    CommonModule,
    AddInfoRoutingModule
  ]
})
export class AddInfoModule { }
