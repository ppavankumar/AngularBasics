import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { User } from "./models/user.model";
import { UserService } from "./services/user.service";
import { User2 } from "./models/user2.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  title = "AllPractice";

  users: User[] = [];
  users1: User2[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.users;
    this.users1 = this.userService.users1;
  }
}
