import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './service/person-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  title = 'httpGet Example';
  people: Person[] = [];
  person = new Person();
  id!: number;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.personService.getPeople()
      .subscribe(data => {
        // console.log(data)
        this.people = data;
        this.id = this.people.length + 1;
      });

  }

  addPerson() {
    this.person.id = this.id + '';
    this.personService.addPerson(this.person)
      .subscribe(data => {
        // console.log(data)
        this.refreshPeople();
      });
  }

  // editPerson(id: string) {
  //   this.personService.editPerson(id)
  //     .subscribe(data => {
  //       // console.log(data)
  //       this.refreshPeople();
  //     });
  // }

  deletePerson(id: string) {
    this.personService.deletePerson(id)
      .subscribe(data => {
        // console.log(data)
        this.refreshPeople();
      });
  }
}
