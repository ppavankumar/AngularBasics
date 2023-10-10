import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DemoComponent } from "./components/templateReferenceVariableDemo/demo/demo.component";
import { CustomerListComponent } from "./components/templateReferenceVariableDemo/customer-list/customer-list.component";
import { ViewChildExample1Component } from './components/viewChildDemo/view-child-example1/view-child-example1.component';
import { ParentChildDemoComponent } from './components/viewChildDemo/parent-child-demo/parent-child-demo.component';

@NgModule({
  declarations: [AppComponent, DemoComponent, CustomerListComponent, ViewChildExample1Component, ParentChildDemoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
