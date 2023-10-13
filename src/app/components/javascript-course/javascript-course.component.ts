import { Component } from "@angular/core";
import { EnrollService } from "src/app/services/enroll.service";

@Component({
  selector: "app-javascript-course",
  templateUrl: "./javascript-course.component.html",
  styleUrls: ["./javascript-course.component.css"],
  // providers: [EnrollService],
})
export class JavascriptCourseComponent {
  title: string = "Javascript";

  constructor(public enrollService: EnrollService) {}

  // onEnroll() {
  //   alert(`Thank you for enrolling to ${this.title} course`)
  // }

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
