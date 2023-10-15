import { Component, OnInit } from "@angular/core";
import { DataTransformService } from "src/app/services/data-transform.service";

@Component({
  selector: "app-child-text-display",
  templateUrl: "./child-text-display.component.html",
  styleUrls: ["./child-text-display.component.css"],
})
export class ChildTextDisplayComponent implements OnInit {
  constructor(private dataService: DataTransformService) {}

  enteredText: string = "";

  ngOnInit() {
    this.dataService.textEnteredEvent.subscribe(
      (data) => (this.enteredText = data)
    );
  }
}
