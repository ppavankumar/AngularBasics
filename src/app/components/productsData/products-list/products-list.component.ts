import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product.model";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"],
})
export class ProductsListComponent implements OnInit {
  // products: Product[] = this.productService.products;
  products: Product[];
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    // this.products = this.productService.getAllProducts();
    this.productService
      .getAllProducts()
      .subscribe((res) => (this.products = res));
    // console.log(this.products);
  }
}
