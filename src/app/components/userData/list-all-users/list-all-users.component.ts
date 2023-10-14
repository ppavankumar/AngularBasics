import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { User2 } from "src/app/models/user2.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-list-all-users",
  templateUrl: "./list-all-users.component.html",
  styleUrls: ["./list-all-users.component.css"],
})
export class ListAllUsersComponent implements OnInit {
  username: string = "";
  status: string = "inactive";

  users: User[] = [];
  users1: User2[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.users;
    this.users1 = this.userService.users1;
  }

  createNewUser() {
    this.userService.createNewUser(this.username, this.status);
    // console.log(this.userService.users1);
  }

  showDetails(user: User2) {
    // console.log(user);
    this.userService.displayUserDetails(user);
  }
}
