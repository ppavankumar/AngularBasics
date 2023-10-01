import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  time = new Date();

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
