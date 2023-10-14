import { Component, OnInit } from "@angular/core";
import { User2 } from "src/app/models/user2.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  user: User2;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.displayUserDetailsClicked.subscribe((data: User2) => {
      this.user = data;
    });
  }
}
