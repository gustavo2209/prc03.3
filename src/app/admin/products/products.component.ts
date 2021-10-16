import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product [] = [];

  /*
   products : Product [] = [
    {
      "id": 1,
      "name": "SAMSUNG TV 49 4K UHD",
      "detail": "Modelo : 4UK6200",
      "price": 1499.99,
      "stock": 1000
    },
    {
      "id": 2,
      "name": "SONY TV 59 4K UHD",
      "detail": "Modelo : 8UK620Y",
      "price": 1899.99,
      "stock": 1450
    },
    {
      "id": 3,
      "name": "PHILIPS TV 79 8K UHD",
      "detail": "Modelo : 87239",
      "price": 3899.99,
      "stock": 13
    },
    {
      "id": 4,
      "name": "AOC TV 29 WHD",
      "detail": "Modelo : wK79",
      "price": 1499.99,
      "stock": 12
    },
    {
      "id": 5,
      "name": "LG TV 49 HD1080",
      "detail": "Modelo : H49",
      "price": 1799.99,
      "stock": 7
    }
  ];
*/
 
  titles : string [] = ['#', 'Nombre', 'Detalle', 'Precio', 'Stock', 'Acciones'];
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {

    this.productService.getAllProduct().subscribe ((products: any ) => {
       this.products = products;
       });
     
  }

  /// Se debe pasar tambien el evento  despues de la versión 8 de angular
  /// se obliga a pasarlo.
  onDeleteProduct  ( product : Product, event : any ) 
  {
    alert(JSON.stringify(product));
    
    this.productService.deteleProduct (product.id).subscribe (res => {
      this.products =this.products.filter ( prod => prod.id !== product.id );
    });
  }


}
