import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./components/demo/demo.component";
import { Custom50PlusAgeHighlightDirectiveDirective } from './customDirectives/custom50-plus-age-highlight-directive.directive';
import { RainbowDirective } from './customDirectives/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Custom50PlusAgeHighlightDirectiveDirective,
    RainbowDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
