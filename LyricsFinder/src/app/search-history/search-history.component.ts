import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';

import { HistoryService } from '../services/history.service';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit, OnDestroy {
  public isLoading = false;
  public searchHistoryList = [];
  public postsPerPage = 5;
  public pageSizeOptions = [5, 10, 20];

  private searches: Subscription;

  constructor(private service: HistoryService) {}

  ngOnInit() {
    this.isLoading = true;
    this.searches = this.service.getSearchHistory()
      .subscribe(history => {
        this.isLoading = false;
        this.searchHistoryList = history.searchHistory;
      })
  }

  onChangedPage(pageData: PageEvent) {
    console.log(pageData);
  }

  removeAll() {
    this.isLoading = true;
    this.service.removeHistory()
      .subscribe(result => {
        if (result.status === 'Success') {
          this.searchHistoryList = [];
          this.isLoading = false;
        }
      });
  }

  removeById(id: string) {
    this.isLoading = true;
    this.service.removeHistoryById(id)
      .subscribe(result => {
        this.searchHistoryList = this.searchHistoryList.filter(h => h._id !== id);
        console.log(this.searchHistoryList);
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    this.searches.unsubscribe();
  }
}
