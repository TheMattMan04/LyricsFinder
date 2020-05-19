import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { LyricsService } from "../services/lyrics.service";
import { Lyric } from "../models/lyric.model";

@Component({
  selector: "app-lyrics",
  templateUrl: "./lyrics.component.html",
  styleUrls: ["./lyrics.component.css"],
})
export class LyricsComponent implements OnInit {
  public songTitle: string;
  public lyrics: Lyric;
  public isLoading = false;
  public subscription: Subscription;
  public placeHolderSearch: string = "Song title";
  public isActive: boolean = false;

  constructor(private service: LyricsService) {}

  ngOnInit() {}

  active() {
    if (this.songTitle !== undefined || this.songTitle !== " ") {
      this.placeHolderSearch = this.songTitle;
    }
    else {
      this.placeHolderSearch = "Song title";
    }
  }

  inactive() {
    if (this.songTitle === undefined || this.songTitle === " ") {
      this.placeHolderSearch = "Song title";
    }
    else {
      this.placeHolderSearch = this.songTitle;
    }
  }

  setSongTitle(title: string) {
    if (title !== undefined) {
      this.songTitle = title;
    }
  }

  findLyrics() {
    if (this.songTitle === undefined) {
      this.placeHolderSearch = "No title entered";
    }
    else {
      this.isLoading = true;
      this.subscription = this.service
        .getLyrics(this.songTitle)
        .subscribe((lyrics) => {
          this.isLoading = false;
          this.lyrics = lyrics;
          this.songTitle = " ";
        });
    }
  }
}
