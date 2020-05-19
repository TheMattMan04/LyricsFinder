import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

import { HistoryService } from '../services/history.service';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  public isLoading = false;
  public searchHistoryList = [];
  public postsPerPage = 5;
  public pageSizeOptions = [5, 10, 20];

  constructor(private service: HistoryService) {}

  ngOnInit() {
    this.getSearches();
  }

  onChangedPage(pageData: PageEvent) {
    console.log(pageData);
  }

  getSearches() {
    this.isLoading = true;
    this.service.getSearchHistory()
      .subscribe(history => {
        this.isLoading = false;
        this.searchHistoryList = history.searchHistory;
      });
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
}
