import { Component, EventEmitter, Input, Output } from "@angular/core";

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

  selectedCoursesType: string = "all";

  @Output()
  filterSelectedCoursesTypeChanged: EventEmitter<string> = new EventEmitter();

  onSelectedCoursesTypeChange = () => {
    this.filterSelectedCoursesTypeChanged.emit(this.selectedCoursesType);
    // console.log(this.selectedCoursesType);
  };
}
