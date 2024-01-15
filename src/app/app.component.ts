import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, CommonModule, RouterOutlet, HeroesComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
