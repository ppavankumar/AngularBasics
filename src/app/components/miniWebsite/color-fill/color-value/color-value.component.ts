import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-color-value",
  templateUrl: "./color-value.component.html",
  styleUrls: ["./color-value.component.css"],
})
export class ColorValueComponent {
  changeColorValue: string = "white";

  @Output()
  emitChangeColorValue: EventEmitter<string> = new EventEmitter<string>();

  onChangeColorValue = () => {
    this.emitChangeColorValue.emit(this.changeColorValue);
    // console.log(this.changeColorValue);
  };
}
