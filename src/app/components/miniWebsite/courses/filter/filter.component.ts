import { Component, Input } from "@angular/core";

@Component({
  selector: "app-courses-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class CoursesFilterComponent {
  @Input()
  all: number = 0;

  @Input()
  free: number = 0;

  @Input()
  premium: number = 0;
}
