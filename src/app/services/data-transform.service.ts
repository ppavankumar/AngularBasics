import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataTransformService {
  constructor() {}

  // textEnteredEvent = new EventEmitter();
  textEnteredEvent = new Subject<string>();

  textEntered(enteredText: string) {
    // this.textEnteredEvent.emit(enteredText);
    this.textEnteredEvent.next(enteredText);
  }
}
