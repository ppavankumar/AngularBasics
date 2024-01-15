import { Component } from "@angular/core";
import { Hero } from "./model/hero";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import heroes from './data/heroes.json';

@Component({
  selector: "app-heroes",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./heroes.component.html",
  styleUrl: "./heroes.component.css",
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroList: Hero[] = heroes;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('selected:', this.selectedHero);
  }
}
