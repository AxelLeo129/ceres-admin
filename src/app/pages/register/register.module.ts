import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBelr5fDWyhUbRd3o6AZBKSpyi-apu5h2Q'
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
