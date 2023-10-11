import { Component } from "@angular/core";

@Component({
  selector: "app-highest-likes-component",
  templateUrl: "./highest-likes.component.html",
  styleUrls: ["./highest-likes.component.css"],
})
export class HighestLikesComponent {
  videos = [
    {
      title: "My video 1",
      likes: 257,
      dislikes: 12,
      shares: 415,
    },
    {
      title: "My video 2",
      likes: 325,
      dislikes: 12,
      shares: 215,
    },
    {
      title: "My video 3",
      likes: 105,
      dislikes: 12,
      shares: 513,
    },
  ];

  getHighestLikesCount = () => {
    let length = this.videos.length;
    let count = 0;
    this.videos.forEach((v) => (count += v.likes));

    return count / length;
  };
}
