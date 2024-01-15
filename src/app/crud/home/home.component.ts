import { Component, OnInit } from "@angular/core";
import { CrudService } from "../crud.service";
import { Product } from "../product";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getAll().subscribe((data: Product[]) => {
      // console.log(data);
      this.products = data;
    });
  }
}
