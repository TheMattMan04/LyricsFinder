import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service'
import { Lyric } from './models/lyric.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  songTitle: string;
  lyrics: Lyric;

  constructor(private service: ApiService) {}

  ngOnInit() {
  }

  setSongTitle(title: string) {
    this.songTitle = title;
  }

  findLyrics() {
    this.service.getLyrics(this.songTitle).subscribe(lyrics => {
        this.lyrics = lyrics;
    });
  }
}
