import { Component } from "@angular/core";
import { DataTransformService } from "src/app/services/data-transform.service";

@Component({
  selector: "app-parent-textbox",
  templateUrl: "./parent-textbox.component.html",
  styleUrls: ["./parent-textbox.component.css"],
})
export class ParentTextboxComponent {
  constructor(private dataService: DataTransformService) {}

  enteredText: string = "";

  processEnteredText = () => {
    this.dataService.textEntered(this.enteredText);
  };
}
