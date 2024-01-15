import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PersonDetailsComponent } from "./person-component/person-details.component";
import { HomeComponent } from "./crud/home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [FormsModule, CommonModule, RouterOutlet, PersonDetailsComponent, HomeComponent],
})
export class AppComponent {
  title = "my-sample-angular-project";
}
