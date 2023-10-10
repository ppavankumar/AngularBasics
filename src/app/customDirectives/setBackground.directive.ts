import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[setBackground]",
})
export class SetBackgroundDirective {
  //   private element!: ElementRef;

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = "#c8e6c9";
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "#c8e6c9";
  }
}
