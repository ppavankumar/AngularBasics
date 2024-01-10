import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseURL: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<Person[]> {
    // console.log('getPeople ' + this.baseURL + 'people');
    return this.http.get<Person[]>(this.baseURL + 'people')
  }

  getPerson(id: string): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL + 'people/' + id)
  }

  addPerson(person: Person): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(person);
    // console.log(body)
    return this.http.post(this.baseURL + 'people', body, { 'headers': headers })
  }

  editPerson(id: string, person: Person): Observable<any> {
    let p = this.getPerson(id);
    console.log(p);
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(person);
    // console.log(body)
    return this.http.post(this.baseURL + 'people', body, { 'headers': headers })
  }

  deletePerson(id: String): Observable<any> {
    return this.http.delete(this.baseURL + 'people/' + id);
  }
}
