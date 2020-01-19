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
    console.log(this.lyrics);
  }

  setSongTitle(title: string) {
    this.songTitle = title;

    console.log(this.songTitle);
  }

  findLyrics() {
    // this.songTitle = title;

    this.service.getLyrics(this.songTitle).subscribe(lyrics => {
        this.lyrics = lyrics;

        console.log(this.lyrics);
    });
  }
}
