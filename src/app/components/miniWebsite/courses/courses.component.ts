import { Component, Input } from "@angular/core";
// import * as courses from "./courses.json";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent {
  @Input()
  title: string = "";

  description: string = "course desc";

  courses = [
    {
      id: 10,
      title: "Bootstrap for beginners",
      // url: 'https://dummyimage.com/100x100/000000/ffffff&text=course.title',
      price: 0,
      desc: "course desc",
      image: "./../assets/courses/course10.jpg",
      rating: 4.8,
      duration: 26.7,
      author: "Sarah King",
    },
    {
      id: 1,
      title: "Complete Modern JavaScript Course",
      price: 499,
      desc: "course desc",
      image: "./../assets/courses/course1.jpg",
      rating: 4.5,
      duration: 18.2,
      author: "Steve smith",
    },
    {
      id: 2,
      title: "A complete Angular Course",
      price: 599,
      desc: "course desc",
      image: "./../assets/courses/course2.jpg",
      rating: 4.9,
      duration: 20.8,
      author: "Sarah King",
    },
    {
      id: 3,
      title: "A Complete Node JS Bootcamp",
      price: 449,
      desc: "course desc",
      image: "./../assets/courses/course3.jpg",
      rating: 3.7,
      duration: 16.6,
      author: "Mark Vought",
    },
    {
      id: 4,
      title: "A Complete React Developer Course",
      price: 599,
      desc: "course desc",
      image: "./../assets/courses/course4.jpg",
      rating: 4.8,
      duration: 28.2,
      author: "Sarah King",
    },
    {
      id: 5,
      title: "ASP.NET Core with Web API",
      price: 649,
      desc: "course desc",
      image: "./../assets/courses/course5.jpg",
      rating: 3.5,
      duration: 34.4,
      author: "Steve smith",
    },
    {
      id: 6,
      title: "Froentend Development with Vue.js",
      price: 329,
      desc: "course desc",
      image: "./../assets/courses/course6.jpg",
      rating: 4.5,
      duration: 17.7,
      author: "Steve smith",
    },
    {
      id: 7,
      title: "A Complete Python Bootcamp",
      price: 469,
      desc: "course desc",
      image: "./../assets/courses/course7.jpg",
      rating: 3.4,
      duration: 32.6,
      author: "Mark Vought",
    },
    {
      id: 8,
      title: "Machine Learning with Python",
      price: 1299,
      desc: "course desc",
      image: "./../assets/courses/course8.jpg",
      rating: 4.8,
      duration: 26.7,
      author: "Sarah King",
    },
    {
      id: 9,
      title: "JS for beginners",
      price: 0.0,
      desc: "course desc",
      image: "./../assets/courses/course9.jpg",
      rating: 4.8,
      duration: 26.7,
      author: "Sarah King",
    },
  ];

  getTotalCourses = () => {
    return this.courses.length;
  };

  getTotalFreeCourses = () => {
    return this.courses.filter((course) => course.price === 0).length;
  };

  getTotalPremiumCourses = () => {
    return this.courses.filter((course) => course.price > 0).length;
  };

  courseCountRadioButton: string = "all";

  onFilterRadioButtonChanged = (data: string) => {
    this.courseCountRadioButton = data;
    // console.log(this.courseCountRadioButton);
  };

  searchForNewCourse: string = "";

  searchForNewCourseEvent = (data: string) => {
    this.searchForNewCourse = data;
    // console.log(this.searchForNewCourse);
    // console.log(
    //   this.courses.forEach(
    //     (course) =>
    //       course.title.includes(this.searchForNewCourse) && console.log(course)
    //   )
    // );
  };
}
