import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';

import { News } from 'src/app/models/news.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor (private httpService: HttpService) { }
  news$ = new Observable<News[]>();

  ngOnInit(): void {
    this.news$ = this.httpService.get();
  }
}
