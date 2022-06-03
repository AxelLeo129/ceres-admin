import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPlatilloComponent } from './edit-platillo.component';

const routes: Routes = [{ path: '', component: EditPlatilloComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPlatilloRoutingModule { }
