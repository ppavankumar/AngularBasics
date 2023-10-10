import { Component } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent {
  getMyVariableValue = (myVariable: HTMLInputElement) => {
    alert("Hello, " + myVariable.value);
  };
}
