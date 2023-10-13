import { Component } from "@angular/core";
import { EnrollService } from "src/app/services/enroll.service";

@Component({
  selector: "app-angular-course",
  templateUrl: "./angular-course.component.html",
  styleUrls: ["./angular-course.component.css"],
  // providers: [EnrollService],
})
export class AngularCourseComponent {
  title: string = "Angular";

  constructor(private enrollService: EnrollService) {}

  // onEnroll() {
  //   alert(`Thank you for enrolling to ${this.title} course`)
  // }

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
