import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatilloComponent } from './add-platillo.component';

const routes: Routes = [{ path: '', component: AddPlatilloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPlatilloRoutingModule { }
