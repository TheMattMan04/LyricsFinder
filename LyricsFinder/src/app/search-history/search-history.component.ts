import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  public isLoading = false;
  public searchHistoryList = [];

  constructor(private service: ApiService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    this.service.getSearchHistory()
      .subscribe(history => {
        this.isLoading = false;
        this.searchHistoryList = history.searchHistory;
      });
  }
}
