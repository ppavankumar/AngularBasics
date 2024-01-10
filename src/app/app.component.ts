import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonComponentComponent } from "./person-component/person-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, CommonModule, RouterOutlet, PersonComponentComponent]
})
export class AppComponent {
  title = 'my-sample-angular-project';
}
