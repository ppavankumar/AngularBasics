import { Component } from "@angular/core";

@Component({
  selector: "app-parent-child-demo",
  templateUrl: "./parent-child-demo.component.html",
  styleUrls: ["./parent-child-demo.component.css"],
})
export class ParentChildDemoComponent {
  sayHello = () => {
    console.log("Hello from demo component class!");
  };
}
