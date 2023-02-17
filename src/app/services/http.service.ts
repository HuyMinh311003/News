import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { News } from '../models/news.model';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get() {
    let url = "https://social.runwayclub.dev/api/articles/latest";
    return this.httpClient.get(url).pipe(map((data:any)=>{
      return <News[]>data;
    }));
  }
}
