import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductsService /*implements OnInit*/ {
  products: Product[] = [];
  // products: any;

  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   const url: string = "../jsonData/products.json";
  //   this.http.get<Product[]>(url).subscribe((data) => {
  //     console.log("data:", data);
  //     this.products = data;
  //   });
  // }

  getAllProducts = () => {
    const url: string = "/jsonData/products.json";
    // this.http.get<Product[]>(url).subscribe((data) => {
    //   // console.log("data:", data);
    //   this.products = data;
    // });
    // console.log(this.products)
    // return this.products;

    return this.http.get<Product[]>(url);
  };
}
