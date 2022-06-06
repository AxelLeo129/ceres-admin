import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule) },
  { path: 'add-platillo', loadChildren: () => import('./pages/add-platillo/add-platillo.module').then(m => m.AddPlatilloModule) },
  { path: 'edit-platillo', loadChildren: () => import('./pages/edit-platillo/edit-platillo.module').then(m => m.EditPlatilloModule) },
  { path: 'info', loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule) },
  { path: 'add-info', loadChildren: () => import('./pages/add-info/add-info.module').then(m => m.AddInfoModule) },
  { path: 'edit-info', loadChildren: () => import('./pages/edit-info/edit-info.module').then(m => m.EditInfoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
