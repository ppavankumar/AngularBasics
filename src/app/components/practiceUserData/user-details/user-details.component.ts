import { Component } from "@angular/core";
import { UserDetails } from "../model/users.model";
import { UsersService } from "../service/users.service";

@Component({
  selector: "app-users-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent {
  user: UserDetails;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.userDetailsEvent.subscribe((data) => (this.user = data));
  }
}
