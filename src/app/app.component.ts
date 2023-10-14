import { Component } from "@angular/core";
import { UserService } from "./services/user.service";
import { UsersService } from "./components/practiceUserData/service/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService, UsersService],
})
export class AppComponent {
  title = "AllPractice";
}
