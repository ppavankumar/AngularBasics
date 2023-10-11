import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appHighestLikesHighlightDirective]",
})
export class HighestLikesHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() defaultColor = "white";
  @Input() highlightColor = "rgb(255, 205, 205)";

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "backgroundColor",
    //   this.highlightColor
    // );
    // this.background = this.defaultColor;
  }

  @HostBinding("style.backgroundColor") background?: string =
    this.highlightColor;

  @Input() set highlightCardWithMaxLikes(value: Object) {
    let entries = Object.entries(value);
    for (let [className, condition] of entries) {
      if (condition) {
        delete this.background;
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }

  @HostListener("mouseenter") onMouseEnter() {}

  @HostListener("mouseleave") onMouseLeave() {}
}
