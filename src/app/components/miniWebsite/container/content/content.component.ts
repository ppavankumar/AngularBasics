import { Component, Output } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent {
  time = new Date();
  source: string = "../../../../../assets/img/ecommerce.jpg";
  counter: number = 1;
  slogan: string = "Your one stop for everything. ";
  @Output()
  displayNotification: boolean = false;

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  incrementAndGetChangedSlogan = () => {
    return ++this.counter;
  };

  getSlogan = () => {
    return this.slogan + "Value now: " + this.counter;
  };

  showOrHideNotificationBar = () => {
    this.displayNotification = !this.displayNotification;
  };
}
