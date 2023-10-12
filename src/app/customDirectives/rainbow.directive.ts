import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appRainbow]",
})
export class RainbowDirective {
  constructor() {}

  possibleColors = [
    "darksalmon",
    "hotpink",
    "lightskyblue",
    "goldenrod",
    "peachpuff",
    "mediumspringgreen",
    "cornflowerblue",
    "blanchedalmond",
    "lightslategrey",
  ];

  @HostBinding("style.color") color: string;
  @HostBinding("style.border-color") borderColor: string;

  @HostListener("keydown") newColor() {
    let randomColor = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[randomColor];
  }

  @HostListener("mouseenter") mouseenter() {
    let randomColor = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[randomColor];
  }

  @HostListener("mouseleave") mouseleave() {
    let randomColor = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[randomColor];
  }
}
