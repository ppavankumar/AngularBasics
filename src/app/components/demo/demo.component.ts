import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent {
  @Input() title: string = "";

  @ContentChild("paragraph") paragraphEl: ElementRef;

  ngOnInit() {
    console.log(this.paragraphEl);
  }

  ngAfterContentInit() {
    this.paragraphEl.nativeElement.textContent = "This is a new paragraph.";
    console.log(this.paragraphEl.nativeElement.textContent);
  }
}
