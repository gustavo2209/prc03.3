import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Product from "src/app/models/product.model";
import { environment } from "src/environments/environment";


@Injectable()
export class ProductService {
  readonly API = 'products';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllProduct() {
    const url = `${this.BASE_URL}/${this.API}`;
    return this.http.get(url);
  }

  getProductById(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}`;
    return this.http.get(url);
  }

  createProduct(product: Product) {
    const url = `${this.BASE_URL}/${this.API}`;
    return this.http.post(url, {
      body: JSON.stringify(product)
    });
  }

  updateProduct(product: Product) {
    const url = `${this.BASE_URL}/${this.API}/${product.id}`;
    return this.http.put(url, {
      body: JSON.stringify(product)
    });
  }

  deteleProduct(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}`;
    alert(url);
    return this.http.delete(url);
  }
}