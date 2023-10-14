import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AddUserComponent } from "./components/userData/add-user/add-user.component";
import { ListAllUsersComponent } from "./components/userData/list-all-users/list-all-users.component";
import { ProductsListComponent } from "./components/productsData/products-list/products-list.component";
import { ProductDetailsComponent } from "./components/productsData/product-details/product-details.component";
import { HttpClientModule } from "@angular/common/http";
import { UserDetailsComponent } from "./components/practiceUserData/user-details/user-details.component";
import { UsersListComponent } from "./components/practiceUserData/users-list/users-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListAllUsersComponent,
    UserDetailsComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    UsersListComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
