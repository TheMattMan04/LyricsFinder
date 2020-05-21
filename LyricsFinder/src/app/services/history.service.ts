import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SearchHistory } from '../models/search-history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private searchHistoryUrl = 'http://localhost:3000/api/lyrics/history/'

  constructor(private http: HttpClient) {}

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