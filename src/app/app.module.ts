import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./components/demo/demo.component";
import { SetBackgroundDirective } from "./customDirectives/setBackground.directive";
import { HighlightDirective } from './customDirectives/highlight.directive';
import { HoverDirective } from './customDirectives/hover.directive';
import { BetterHighlightDirective } from './customDirectives/better-highlight.directive';

@NgModule({
  declarations: [AppComponent, DemoComponent, SetBackgroundDirective, HighlightDirective, HoverDirective, BetterHighlightDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
