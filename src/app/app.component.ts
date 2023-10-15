import { Component } from "@angular/core";
import { DataTransformService } from "./services/data-transform.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataTransformService],
})
export class AppComponent {
  title = "Data transfer demo";

  constructor(private dataService: DataTransformService) {}
}
