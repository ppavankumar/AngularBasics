import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "LifeCycleHook";

  inputText: string = "";

  destroy: boolean = true;

  onSubmit = (input: HTMLInputElement) => {
    this.inputText = input.value;
  };

  destroyComponent() {
    this.destroy = false;
  }
}
