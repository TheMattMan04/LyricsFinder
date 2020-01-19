import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Lyric } from '../models/lyric.model';


@Component({
  selector: 'app-findlyrics',
  templateUrl: './findlyrics.component.html',
  styleUrls: ['./findlyrics.component.css']
})
export class FindlyricsComponent implements OnInit {

  songTitle: string;
  lyrics: Lyric;

  constructor(private service: ApiService) { }

  ngOnInit() {
    
  }

  findLyric(title: string) {
    this.songTitle = title;

    this.service.getLyrics(this.songTitle).subscribe(lyrics => {
        this.lyrics = lyrics;
    });
  }
}
