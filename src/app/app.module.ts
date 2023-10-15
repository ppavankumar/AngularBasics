import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ParentTextboxComponent } from './components/parent-textbox/parent-textbox.component';
import { ChildTextDisplayComponent } from './components/child-text-display/child-text-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentTextboxComponent,
    ChildTextDisplayComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
