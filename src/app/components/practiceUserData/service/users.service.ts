import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { UserDetails } from "../model/users.model";
// import { User } from "src/app/components/practiceUserData/model/user.model";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users: UserDetails[] = [
    { name: "Steve", status: true },
    { name: "Christina", status: false },
    { name: "Kondala", status: true },
    { name: "Ramanan", status: false },
    { name: "Jerry", status: true },
  ];

  // ngOnInit() {
  //   this.users = [
  //     { name: "Steve", status: true },
  //     { name: "Christina", status: false },
  //     { name: "Kondala", status: true },
  //     { name: "Ramanan", status: false },
  //     { name: "Jerry", status: true },
  //   ];
  // }

  constructor() {}

  userDetailsEvent = new EventEmitter();

  showDetails(user: UserDetails) {
    this.userDetailsEvent.emit(user);
  }
}
