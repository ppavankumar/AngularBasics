import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  time = new Date();
  counter: number = 1;
  slogan: string = 'Your one stop for everything. ';

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  incrementAndGetChangedSlogan = () => {
    return ++this.counter;
  }

  getSlogan = () => {
    return this.slogan +  'Value now: ' + this.counter;
  }
}
