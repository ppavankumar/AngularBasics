import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-courses-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class CoursesSearchComponent {
  searchNewCourse: string = "";

  @Output()
  searchNewCourseEvent: EventEmitter<string> = new EventEmitter();

  onSearchNewCourse = () => {
    this.searchNewCourseEvent.emit(this.searchNewCourse);
    // console.log(this.searchNewCourse);
  };
}
