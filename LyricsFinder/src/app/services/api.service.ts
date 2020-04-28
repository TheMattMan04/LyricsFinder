import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lyric } from '../models/lyric.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000/api/lyrics';

  constructor(private http: HttpClient) { }

  public getLyrics(songTitle: string): Observable<Lyric> {
    return this.http.get<Lyric>(this.url + '?title=' + songTitle);
  }
}
