import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService /*implements OnInit*/ {
  [x: string]: any;
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

  getAllProducts = (): Observable<Product[]> => {
    const url: string = "/jsonData/products.json";
    // this.http.get<Product[]>(url).subscribe((data) => {
    //   // console.log("data:", data);
    //   this.products = data;
    // });
    // console.log(this.products)
    // return this.products;

    return this.http.get<Product[]>(url);
  };

  showProductDetailsEvent = new EventEmitter<Product>();

  showDetails = (product: Product) => {
    this.showProductDetailsEvent.emit(product);
  };
}
