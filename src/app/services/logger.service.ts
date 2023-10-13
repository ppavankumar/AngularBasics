import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService {
  constructor() {}

  logMessage(username: string, status: string) {
    console.log(
      `A new user with username: ${username} and status: ${status} has been created!`
    );
  }
}
