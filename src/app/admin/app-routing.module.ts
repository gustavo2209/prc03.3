import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path : '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo:'login'
  },
  {
    path : 'admin',
    loadChildren:() => import('./login/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
