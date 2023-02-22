import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { NewsState } from 'src/states/news.state';
import * as NewsActions from 'src/actions/news.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  currentPage = 1;
  news$ = new Observable<NewsState>();

  constructor (private store: Store<{news: NewsState}>) {
    this.news$ = this.store.select('news');
  }

  getNewsPage() {
    this.currentPage += 1;
    this.store.dispatch(NewsActions.getPaginate({page: this.currentPage, per_page: 10}));
  }

  getPreviousPage() {
    this.currentPage -= 1;
    this.store.dispatch(NewsActions.getPaginate({page: this.currentPage, per_page: 10}));
  }

  getNews() {
    this.store.dispatch(NewsActions.getPaginate({page: 1, per_page: 10}));
  }

  ngOnInit(): void {
    this.getNews();
  }
}
