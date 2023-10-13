import { Component } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
  providers: [],
})
export class AddUserComponent {
  username: string = "";
  status: string = "inactive";

  constructor(private userService: UserService) {}

  createNewUser() {
    this.userService.createNewUser(this.username, this.status);
    // console.log(this.userService.users1);
  }
}
