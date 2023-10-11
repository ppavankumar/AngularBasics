import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appCustom50PlusAgeHighlightDirective]",
})
export class Custom50PlusAgeHighlightDirectiveDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() defaultHighlightColor = "white";

  @HostBinding("style.backgroundColor") background = "red";

  ngOnInit() {}

  @HostListener("mouseenter") mouseEnter() {
    // console.log('enter')
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "rgb(27, 83, 107)"
    );
  }

  @HostListener("mouseleave") mouseLeave() {
    // console.log('leave')
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      this.defaultHighlightColor
    );
  }
}
