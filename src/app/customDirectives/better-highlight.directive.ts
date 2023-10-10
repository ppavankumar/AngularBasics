import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding("style.backgroundColor") background: string = "transparent";
  @HostBinding("style.border") border: string = "none";

  @HostListener('mouseenter')
  mouseEnter() {
    this.background = 'pink';
    this.border = '2px solid red';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.background = 'transparent';
    this.border = 'none';
  }
}
