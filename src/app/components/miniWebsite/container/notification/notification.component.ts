import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="notif-div">
                <p>This website uses cookies to provide better user experience.</p>
             </div>`,
  styles: [".notif-div{margin: 5px 0; padding: 2px 10px; background-color: #fad7a0; text-align: center;}", "p{font-size: 14px;}"]
})
export class NotificationComponent {

}
