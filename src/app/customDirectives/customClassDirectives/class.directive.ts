import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appClass]",
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appClass') set display(value: Object) {
    let entries = Object.entries(value);
    // console.log(entries)
    // entries.forEach(
    //   (entry) =>
    //     entry[1] && this.renderer.addClass(this.element.nativeElement, entry[0])
    // );

    // for (let entry of entries) {
    //   if (entry[1]) {
    //     this.renderer.addClass(this.element.nativeElement, entry[0]);
    //   }
    // }

    for (let [className, condition] of entries) {
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
