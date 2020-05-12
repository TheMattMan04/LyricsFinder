import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Lyric } from '../models/lyric.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {
  private songTitle: string;
  public lyrics: Lyric;
  public isLoading = false;
  subscription: Subscription;

  constructor(private service: ApiService) {}

  ngOnInit() {}

  setSongTitle(title: string) {
    this.songTitle = title;
  }

  findLyrics() {
    this.isLoading = true;

    this.subscription = this.service.getLyrics(this.songTitle)
      .subscribe(lyrics => {
        this.isLoading = false;
        this.lyrics = lyrics;
    });
  }
}
