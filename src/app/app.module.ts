import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./components/miniWebsite/container/container.component";
import { NavbarComponent } from "./components/miniWebsite/container/navbar/navbar.component";
import { ContentComponent } from "./components/miniWebsite/container/content/content.component";
import { NotificationComponent } from "./components/miniWebsite/container/notification/notification.component";
import { SearchComponent } from "./components/miniWebsite/container/search/search.component";
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from "./components/miniWebsite/container/products/products.component";
import { CoursesComponent } from "./components/miniWebsite/courses/courses.component";
import { HeaderComponent } from "./components/miniWebsite/courses/header/header.component";
import { CoursesSearchComponent } from "./components/miniWebsite/courses/search/search.component";
import { CoursesFilterComponent } from "./components/miniWebsite/courses/filter/filter.component";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    ContentComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    CoursesComponent,
    HeaderComponent,
    CoursesSearchComponent,
    CoursesFilterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
