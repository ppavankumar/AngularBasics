import { Component, ElementRef, ViewChild } from "@angular/core";
import { ParentChildDemoComponent } from "../parent-child-demo/parent-child-demo.component";

@Component({
  selector: "app-view-child-example1",
  templateUrl: "./view-child-example1.component.html",
  styleUrls: ["./view-child-example1.component.css"],
})
export class ViewChildExample1Component {
  @ViewChild("dobInput") dateOfBirth: ElementRef;
  @ViewChild("ageInput") age: ElementRef;
  @ViewChild(ParentChildDemoComponent, { static: true })
  demoComponent: ParentChildDemoComponent;

  calculateAge = () => {
    let birthYear = new Date(
        this.dateOfBirth.nativeElement.value
      ).getFullYear(),
      currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;

    // console.log(this.dateOfBirth);
    // console.log(this.age);
  };
}
