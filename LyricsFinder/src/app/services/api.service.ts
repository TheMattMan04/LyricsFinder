import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Lyric } from '../models/lyric.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://some-random-api.ml/lyrics';

  constructor(private http: HttpClient) { }

  getLyrics(songTitle: string): Observable<Lyric> {
    return this.http.get<Lyric>(this.url + '?title=' + songTitle);
  }
}
