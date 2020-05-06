import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lyric } from '../models/lyric.model';
import { SearchHistory } from '../models/search-history.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  lyricsUrl = 'http://localhost:3000/api/lyrics/';
  searchHistoryUrl = 'http://localhost:3000/api/lyrics/history/'

  constructor(private http: HttpClient) { }

  public getLyrics(songTitle: string): Observable<Lyric> {
    return this.http.get<Lyric>(this.lyricsUrl + '?title=' + songTitle);
  }

  public getSearchHistory(): Observable<SearchHistory> {
    return this.http.get<SearchHistory>(this.searchHistoryUrl);
  }

  public removeHistory(): Observable<any> {
    return this.http.delete<any>(this.searchHistoryUrl);
  }

  public removeHistoryById(id: string): Observable<any> {
    return this.http.delete<any>(this.searchHistoryUrl + id);
  }
}
