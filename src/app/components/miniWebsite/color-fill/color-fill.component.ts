import { Component } from "@angular/core";

@Component({
  selector: "app-color-fill",
  templateUrl: "./color-fill.component.html",
  styleUrls: ["./color-fill.component.css"],
})
export class ColorFillComponent {
  changeDivColor: string = "#fff";

  onChangeDivColor = (data: string) => {
    this.changeDivColor = data;
    // console.log(this.changeDivColor);
  };
}
