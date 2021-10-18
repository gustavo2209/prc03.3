import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin.component';

const routes : Routes = [
  {
    path : '',
    component: AdminComponent,
    children:[
      {
        path: 'products',
        component : ProductsComponent
      },
      {
        path : 'products/:id',
        component: ProductsComponent
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
