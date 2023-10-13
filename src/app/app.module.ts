import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListAllUsersComponent } from './components/list-all-users/list-all-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [AppComponent, AddUserComponent, ListAllUsersComponent, UserDetailsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
