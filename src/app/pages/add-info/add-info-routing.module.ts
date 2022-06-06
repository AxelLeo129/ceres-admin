import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInfoComponent } from './add-info.component';

const routes: Routes = [{ path: '', component: AddInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddInfoRoutingModule { }
