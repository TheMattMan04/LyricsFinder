import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lyric } from '../models/lyric.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {
  private url = environment.lyricsUrl;

  constructor(private http: HttpClient) {}

  public getLyrics(songTitle: string): Observable<Lyric> {
    return this.http.get<Lyric>(this.url + '?title=' + songTitle);
  }
}
