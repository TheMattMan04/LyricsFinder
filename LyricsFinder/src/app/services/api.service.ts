import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Lyric } from '../models/lyric.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000/api/lyrics';

  constructor(private http: HttpClient) { }

  getLyrics(songTitle: string): Observable<any> {
    return this.http.get<any>(this.url + '?title=' + songTitle);
  }
}
