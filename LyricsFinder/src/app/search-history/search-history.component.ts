import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.getSearchHistory()
      .subscribe(history => {
        console.log(history);
      })
  }
}
