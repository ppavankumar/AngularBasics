import { Component, Input } from "@angular/core";

@Component({
  selector: "app-notification",
  template: `<div class="alert alert-success" [hidden]="displayNotification">
    <p>This website uses cookies to provide better user experience.</p>
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styles: [
    ".notif-div{margin: 5px 0; padding: 2px 10px; background-color: #fad7a0; text-align: center;}",
    "p{font-size: 14px;}",
    ".close{float: right; margin-top: -50px;}",
  ],
})
export class NotificationComponent {
  @Input()
  displayNotification: boolean = false;

  closeNotification = () => {
    this.displayNotification = !this.displayNotification;
  };
}
