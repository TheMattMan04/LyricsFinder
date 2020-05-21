import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SearchHistory } from '../models/search-history.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private url = environment.historyUrl;

  constructor(private http: HttpClient) {}

  public getSearchHistory(): Observable<SearchHistory> {
    return this.http.get<SearchHistory>(this.url);
  }

  public removeHistory(): Observable<any> {
    return this.http.delete<any>(this.url);
  }

  public removeHistoryById(id: string): Observable<any> {
    return this.http.delete<any>(this.url + id);
  }
}
