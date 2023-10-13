import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { JavascriptCourseComponent } from "./components/javascript-course/javascript-course.component";
import { TypescriptCourseComponent } from "./components/typescript-course/typescript-course.component";
import { AngularCourseComponent } from "./components/angular-course/angular-course.component";
import { EnrollService } from "./services/enroll.service";

@NgModule({
  declarations: [
    AppComponent,
    JavascriptCourseComponent,
    TypescriptCourseComponent,
    AngularCourseComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EnrollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
