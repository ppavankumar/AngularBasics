import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/miniWebsite/container/container.component';
import { NavbarComponent } from './components/miniWebsite/container/navbar/navbar.component';
import { ContentComponent } from './components/miniWebsite/container/content/content.component';
import { NotificationComponent } from './components/miniWebsite/container/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    ContentComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
