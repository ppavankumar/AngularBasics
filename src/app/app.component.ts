import { Component, OnInit } from "@angular/core";
import { Observable, filter, from, map, of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Observable Tutorial";

  // myObservable: Observable<any> = new Observable((observer) => {
  //   console.log("Observable starts");
  //   setTimeout(() => {
  //     observer.next("1");
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next("2");
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next("3");
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error("something went wrong."));
  //   // }, 3500);
  //   setTimeout(() => {
  //     observer.next("4");
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next("5");
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  // });

  // myObservable: Observable<any> = Observable.create((observer: any) => {
  //   console.log("Observable starts");
  //   setTimeout(() => {
  //     observer.next("A");
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next("B");
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next("C");
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next("D");
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next("E");
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.error(new Error("something went wrong."));
  //   }, 4500);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  array1 = [1, 2, 6, 7, 8];
  array2 = ["A", "B", "C"];
  // myObservable: Observable<any> = of(this.array1, this.array2, 69, 'BB', false);
  // myObservable: Observable<any> = from(this.array1.map((data) => data * 5));

  // myObservable: Observable<any> = from(this.array1);
  myObservable: Observable<any> = from(this.array1).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val >= 30;
    })
  );

  // transformedOBS = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );

  // filteredOBS = this.transformedOBS.pipe(
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );

  // myPromise = new Promise<void>((myResolve, myReject) => {
  //   // "Producing Code" (May take some time)

  //   myResolve(); // when successful
  //   myReject(); // when error
  // });

  // // "Consuming Code" (Must wait for a fulfilled Promise)
  // // myPromise.then(
  // //   (value) => { /* code if successful */ },
  // //   (error) => { /* code if some error */ }
  // // );
  // myObservable: Observable<any> = from(this.myPromise);

  ngOnInit() {
    this.myObservable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error);
      },
      () => {
        alert("all values are emitted by observable.");
      }
    );
  }
}
