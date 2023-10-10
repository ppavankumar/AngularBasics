import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appHover]",
})
export class HoverDirective {
  // private oldStyle: ElementRef;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter")
  onMouseHover() {
    // this.oldStyle = this.element.nativeElement.style;
    // console.log(this.oldStyle);
    this.renderer.setStyle(this.element.nativeElement, "margin", "30px");
    this.renderer.setStyle(this.element.nativeElement, "padding", "5px 10px");
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, "margin", "10px");
    this.renderer.setStyle(this.element.nativeElement, "padding", "10px");
    // this.element.nativeElement.style = this.oldStyle;
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s");
  }
}
