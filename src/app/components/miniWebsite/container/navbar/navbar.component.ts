import { Component, Input } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  @Input()
  title: string = "";

  menuItems = [
    { name: "HOME", route: "/home" },
    { name: "PRODUCTS", route: "/products" },
    { name: "ITENARY", route: "/itenary" },
    { name: "PEOPLE", route: "/people" },
    { name: "CONTACT", route: "/contact" },
  ];
}
