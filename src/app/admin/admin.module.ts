import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductsComponent,
    AdminComponent,
  ],
  providers : [ ProductService ]
})
export class AdminModule { }
