import { Component } from "@angular/core";
import { EnrollService } from "src/app/services/enroll.service";

@Component({
  selector: "app-typescript-course",
  templateUrl: "./typescript-course.component.html",
  styleUrls: ["./typescript-course.component.css"],
  // providers: [EnrollService],
})
export class TypescriptCourseComponent {
  title: string = "Typescript";

  constructor(private enrollService: EnrollService) {}

  // onEnroll() {
  //   alert(`Thank you for enrolling to ${this.title} course`)
  // }

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}
