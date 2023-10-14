import { Component } from "@angular/core";
import { UsersService } from "../service/users.service";
import { UserDetails } from "../model/users.model";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent {
  users: UserDetails[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.users;
  }

  ngOnInit() {
    this.users = this.usersService.users;
  }

  showUserDetails(user: UserDetails) {
    this.usersService.showDetails(user);
  }
}
