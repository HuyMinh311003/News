import { News } from "src/app/models/news.model";

export interface NewsState {
  news: News[],
  numOfNews: number,
  loading: boolean,
  error: string,
  isSuccess: boolean
}
