import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.showProductDetailsEvent.subscribe((data: Product) => {
      this.product = data;
    });
  }
}
