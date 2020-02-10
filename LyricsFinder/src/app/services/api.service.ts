import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000/api/lyrics';

  constructor(private http: HttpClient) { }

  public getLyrics(songTitle: string): Observable<any> {
    return this.http.get<any>(this.url + '?title=' + songTitle);
  }
}
