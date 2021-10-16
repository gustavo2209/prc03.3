import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductsComponent
  ],
  providers : [ ProductService ]
})
export class AdminModule { }
