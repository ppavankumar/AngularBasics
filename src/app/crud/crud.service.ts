import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private apiServer = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(
        this.apiServer + "/products/",
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  getById(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(this.apiServer + "/products/" + id)
      .pipe(catchError(this.errorHandler));
  }

  getAll(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.apiServer + "/products/")
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, product: Product): Observable<Product> {
    return this.httpClient
      .put<Product>(
        this.apiServer + "/products/" + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete<Product>(this.apiServer + "/products/" + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
